import { Configuration,DiaryApi, DiaryApiFp } from "@/src/client";
import { API_BASE_PATH, handleApiError } from "./ApiConfig";

// APIの設定
const defaultApi = new DiaryApi(
  new Configuration({
    basePath:API_BASE_PATH
  })
);

// 🔹 ログイン関数
export const CreateDiaryApi = async () => {
  try {
    const response = await defaultApi.doCreateDiary(); // APIを呼ぶ
    console.log("日記作成API:", response);
    return response.data; // レスポンスデータを返す
  } catch (error) {
    handleApiError(error); // 共通エラーハンドリング
    throw error;
  }
};
