import { Configuration, LoginApi, LoginReq, RegisterApi, RegisterUserReq } from "@/src/client";
import { API_BASE_PATH } from "./ApiConfig";

// APIの設定
const defaultApi = new RegisterApi(
  new Configuration({
    basePath:API_BASE_PATH
  })
);

// 🔹 ログイン関数
export const RegisterAccountApi = async (name: string, password: string) => {
  try {
    const registerUserReq: RegisterUserReq = { name: name, password: password };
    const response = await defaultApi.doRegisterUser(registerUserReq); // APIを呼ぶ
    console.log("ユーザー名:",response.data.result.name)
    return response.data; // レスポンスデータを返す
  } catch (error) {
    console.error("UserRegister failed:", error);
    throw error;
  }
};
