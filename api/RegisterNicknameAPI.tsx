import { Configuration, DefaultApi, RegisterNickNameReq } from "@/src/client";
import { API_BASE_PATH, handleApiError } from "./ApiConfig";

// APIの設定
const defaultApi = new DefaultApi(
  new Configuration({
    basePath:API_BASE_PATH
  })
);

// 🔹 ログイン関数
export const RegisterNicknameApi = async (nickName: string) => {
  try {
    const registerNickname: RegisterNickNameReq = { nickName: nickName };
    const response = await defaultApi.registerNickName(registerNickname); // APIを呼ぶ
    console.log("ニックネーム:", response.data.result.nickName);
    return response.data; // レスポンスデータを返す
  } catch (error) {
   handleApiError(error); // 共通エラーハンドリング
    throw error;
  }
};