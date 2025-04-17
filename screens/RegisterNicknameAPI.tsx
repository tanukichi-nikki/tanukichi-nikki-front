import { Configuration, DefaultApi, RegisterNickNameReq } from "@/src/client";

// APIの設定
const defaultApi = new DefaultApi(
  new Configuration({
    basePath:
      "http://tanukichi-alb-366766036.ap-northeast-1.elb.amazonaws.com",
    // baseOptions: {
    //     withCredentials: true, // ← これでcookie付きリクエストになる！
    //   },
  })
);

// 🔹 ログイン関数
export const RegisterNicknameApi = async (nickName: string) => {
  try {
    const registerNickname: RegisterNickNameReq = { nickName :nickName };
    const response = await defaultApi.registerNickName(registerNickname); // APIを呼ぶ
    console.log("ニックネーム:",response.data.result.nickName)
    return response.data; // レスポンスデータを返す
  } catch (error) {
    console.error("NickNameRegister failed:", error);
    throw error;
  }
};