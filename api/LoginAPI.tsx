import { Configuration, LoginApi, LoginReq } from "@/src/client";

// APIの設定
const defaultApi = new LoginApi(
  new Configuration({
    basePath:
      "http://tanukichi-alb-1334903106.ap-northeast-1.elb.amazonaws.com",
  })
);

// 🔹 ログイン関数
export const loginUserApi = async (name: string, password: string) => {
  try {
    const loginreq: LoginReq = { name: name, password: password };
    const response = await defaultApi.doLogin(loginreq); // APIを呼ぶ
    return response.data; // レスポンスデータを返す
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
