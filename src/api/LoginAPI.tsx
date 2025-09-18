import { Configuration, LoginApi, LoginReq } from "@/src/client";
import { API_BASE_PATH, handleApiError } from "./ApiConfig";

// APIの設定
const defaultApi = new LoginApi(
  new Configuration({
    basePath:API_BASE_PATH
  })
);

// 🔹 ログイン関数
export const loginUserApi = async (name: string, password: string) => {
  try {
    const loginreq: LoginReq = { name: name, password: password };
    const response = await defaultApi.doLogin(loginreq); // APIを呼ぶ
    return response.data; // レスポンスデータを返す
  } catch (error) {
    handleApiError(error); // 共通エラーハンドリング
    throw error;
  }
};
