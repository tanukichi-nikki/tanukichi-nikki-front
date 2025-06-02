import { Configuration, DefaultApi, ReferDiaryReq } from "@/src/client";

// APIの設定
const defaultApi = new DefaultApi(
  new Configuration({
    basePath:
      "http://tanukichi-alb-1334903106.ap-northeast-1.elb.amazonaws.com",
  })
);

// 🔹 AIチャットAPI関数
export const DayDiaryApi = async ( month : string ) => {
  try {
    const ReferDiaryReq : ReferDiaryReq = { month }
    const response = await defaultApi.doReferDiary( ReferDiaryReq ); // APIを呼ぶ
    console.log("日記APIを呼び出してる");
    return response.data; // レスポンスデータを返す
  } catch (error) {
    console.error("communicate error:", error);
    throw error;
  }
};