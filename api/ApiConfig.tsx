// ApiConfig.ts

import { AxiosError } from "axios";
export const API_BASE_PATH = "http://tanukichi-alb-2128665985.ap-northeast-1.elb.amazonaws.com";

// apiErrorHandler.ts
export const handleApiError = (error: unknown): never => {
  if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const status = axiosError.response.status;

      switch (status) {
        case 400:
          console.error("Bad Request:", axiosError.response.data);
          throw new Error("BadRequest:入力内容に誤りがあります");
        case 401:
          throw new Error("認証エラー。再ログインしてください");
        case 403:
          throw new Error("アクセスが拒否されました");
        case 404:
          throw new Error("リソースが見つかりません");
        case 500:
          throw new Error("サーバーでエラーが発生しました");
        default:
          throw new Error(`予期せぬエラー: ${status}`);
      }
    } else if (axiosError.request) {
      console.error("No response from server");
      throw new Error("サーバーから応答がありません");
    } else {
      console.error("Request setup error", axiosError.message);
      throw new Error("リクエスト設定エラー");
    }
  }

  // Axiosエラー以外
  console.error("Unknown error:", error);
  throw new Error("不明なエラーが発生しました");
};

 
