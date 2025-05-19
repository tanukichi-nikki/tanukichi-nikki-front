import { CommunicateReq, Configuration, DefaultApi, LoginApi, LoginReq } from "@/src/client";

// APIの設定
const defaultApi = new DefaultApi(
  new Configuration({
    basePath:
      "http://tanukichi-alb-44905663.ap-northeast-1.elb.amazonaws.com",
  })
);

// 🔹 AIチャットAPI関数
export const communicateApi = async ( communicate : string ) => {
  try {
    const communicatereq : CommunicateReq = { communicate : communicate}
    const response = await defaultApi.communicate(communicatereq); // APIを呼ぶ
    return response.data; // レスポンスデータを返す
  } catch (error) {
    console.error("communicate error:", error);
    throw error;
  }
};