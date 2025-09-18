import { CommunicateReq, Configuration, DefaultApi, LoginApi, LoginReq } from "@/src/client";
import { API_BASE_PATH, handleApiError } from "./ApiConfig";

// APIの設定
const defaultApi = new DefaultApi(
  new Configuration({
    basePath:API_BASE_PATH,
  })
);

// 🔹 AIチャットAPI関数
export const communicateApi = async ( communicate : string ) => {
  try {
    const communicatereq : CommunicateReq = { communicate : communicate}
    const response = await defaultApi.communicate(communicatereq); // APIを呼ぶ
    return response.data; // レスポンスデータを返す
  } catch (error) {
    handleApiError(error); // 共通エラーハンドリング
    throw error;
  }
};