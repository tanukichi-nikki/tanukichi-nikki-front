import { Configuration, RegisterApi, RegisterUserReq } from "@/src/client";

//ユーザ情報を登録するAPI
//nameとpasswordを入力して、登録できたかをboolean型で返す
export default async function JavaRegisterUserApi(name: string, password: string) {
  try {
    const api = new RegisterApi(
      new Configuration({
        basePath: 'http://localhost:8082',        
      })
    );

    const request: RegisterUserReq = {
      name: name,
      password: password
    };

    const response = await api.doRegisterUser(request);

    const result = response.data.result.result;

    return result;
  } catch {
    console.log("ApiResponse:Error");    
  } finally {
    console.log("ApiResponse:loado");    
  };
};