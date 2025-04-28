import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";

export default function DiaryScreen() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [diaryContent, setDiaryContent] = useState(
    "今日はとても良い一日でした。楽しい出来事がたくさんありました。"
  );

  return (
    <View style={styles.container}>
      {/* カレンダー表示 */}
      <Calendar
        onDayPress={(day: {
          dateString: React.SetStateAction<string | null>;
        }) => {
          setSelectedDate(day.dateString);
          // ここでバックエンドから日記を取得（APIの呼び出し)
          setDiaryContent(`選択された日付 ${day.dateString}:
        '今日はクリスマスだったも！クリスマスマーケット行って、ホットワイン飲んだも！その後にスケートをしたけど、こけてあざになっちゃったも、、、'`);
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
