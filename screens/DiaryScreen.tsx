import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import dayjs from "dayjs";
import { DayDiaryApi } from "@/api/DayDiaryAPI";
import { DayDiary, ReferDiaryWrapperResult } from "@/src/client";

export default function DiaryScreen() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [diaryContent, setDiaryContent] = useState<String>("");
  const [month, setMonth] = useState<string>(dayjs().format("YYYYMM"));
  const [diaryList, setDiaryList] = useState<DayDiary[]>([]);

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const result: ReferDiaryWrapperResult = await DayDiaryApi(month);

        console.log("日記参照APIの結果：", result.result?.dayDiarys);

        if (result.result && Array.isArray(result.result.dayDiarys)) {
          setDiaryList(result.result.dayDiarys);
        } else {
          setDiaryList([]); // 安全なデフォルト
        }
      } catch (error) {
        console.error("日記の取得に失敗しました", error);
        setDiaryList([]); // エラー時も初期化
      }
    };

    fetchDiary();
  }, [month]);

  // 日付選択時に該当する日記を検索して表示
  const handleDayPress = (day: { dateString: string }) => {
    console.log("押された日付①：", day);
    setSelectedDate(day.dateString);
    const targetDay = dayjs(day.dateString).format("YYYYMMDD");
    console.log("検索する日付：", targetDay);
    console.log("日記リスト：", diaryList);
    const diary = diaryList.find((entry) => {
      console.log("entryの中身：", entry);
      return entry.day === targetDay;
    });
    setDiaryContent(diary?.diary ?? "この日の日記はまだありません。");
  };

  return (
    <View style={styles.container}>
      {/* カレンダー表示 */}
      <Calendar
        onDayPress={handleDayPress}
        onMonthChange={(monthObj: { year: any; month: any }) => {
          const newMonth = `${monthObj.year}${String(monthObj.month).padStart(
            2,
            "0"
          )}`;
          setMonth(newMonth);
        }}
        markedDates={
          selectedDate
            ? { [selectedDate]: { selected: true, marked: true } }
            : {}
        }
        theme={{
          selectedDayBackgroundColor: "#e0f7e0",
          calendarBackground: "#e0f7e0",
          todayTextColor: "#00adf5",
          textSectionTitleColor: "black", // 曜日のタイトル文字色
          selectedDotColor: "#548346", // 選択された日付のマーカー色
          selectedDayTextColor: "#548346", // 選択された日付の文字色
          selectedDaygroundColor: "#524E4B", // 選択された日付の背景色
          textMonthFontWeight: "bold", // 月タイトルのフォントウェイト
        }}
      />

      <Text>{diaryContent}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e0f7e0",
  },
  calender: {
    color: "#e0f7e0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  selectedDate: {
    fontSize: 18,
    marginTop: 16,
    textAlign: "center",
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  handle: {
    backgroundColor: "#ccc",
    height: 6,
    width: 50,
    alignSelf: "center",
    borderRadius: 3,
    marginVertical: 10,
  },
  sheetBackground: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  diaryContent: {
    padding: 20,
  },
  diaryText: {
    fontSize: 16,
    color: "#333",
  },
  diaryTextContent: { alignContent: "center" },
});
