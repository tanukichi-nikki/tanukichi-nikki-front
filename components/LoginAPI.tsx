import { Configuration, LoginApi, LoginReq } from "@/src/client";

export async function loginAPI(id: string, password: string) {
  try {
    const loginAPI = new LoginApi(
      new Configuration({
        basePath: "http://localhost:8081",
      })
    );

    const loginReq: LoginReq = {
      name: id,
      password: password,
    };

    const responseLogin = await loginAPI.doLogin(loginReq);

    const text = responseLogin.data.result.userId;

    return "a";
  } catch (error) {
    console.error(error);
    throw error;
  }
}
