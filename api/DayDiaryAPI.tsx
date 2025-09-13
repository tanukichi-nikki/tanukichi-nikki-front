import { Configuration, DefaultApi, ReferDiaryReq } from "@/src/client";
import { API_BASE_PATH } from "./ApiConfig";

// APIの設定
const defaultApi = new DefaultApi(
  new Configuration({
    basePath:API_BASE_PATH
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