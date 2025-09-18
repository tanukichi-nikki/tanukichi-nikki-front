import { Configuration, LoginApi, LoginReq } from "@/src/client";

//ログインをするAPI
//nameとpasswordを入力して、ユーザ情報を返す(userId: int, name: string, nickName: string, result: boolean, )
export default async function JavaLoginApi(name: string, password: string) {
  try {
    const api = new LoginApi(
      new Configuration({
        basePath: "http://localhost:8082",
      })
    );

    const request: LoginReq = {
      name: name,
      password: password,
    };

    const response = await api.doLogin(request);

    const result = response.data.result;

    console.log("ApiResponse:Success");

    return result;
  } catch {
    console.log("ApiResponse:Error");
  } finally {
    console.log("ApiResponse:loado");
  }
}
