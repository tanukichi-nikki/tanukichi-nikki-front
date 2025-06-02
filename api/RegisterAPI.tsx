import { Configuration, LoginApi, LoginReq, RegisterApi, RegisterUserReq } from "@/src/client";

// APIの設定
const defaultApi = new RegisterApi(
  new Configuration({
    basePath:
      "http://tanukichi-alb-1334903106.ap-northeast-1.elb.amazonaws.com",
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
