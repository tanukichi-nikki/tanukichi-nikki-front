import { LoginWrapperResult } from "@/src/client";
import { HttpResponse } from "msw";
import type { HttpResponseResolver } from "msw";

export const mockLogin: HttpResponseResolver = () => {
    const data:LoginWrapperResult = {
        resultCode:'200',
        result:{
            userId: 123,
            name: "user@example.com",
            nickName:"",
            result: true,
          }
    }
    return HttpResponse.json(data,{status:200})
}

export const mockLoginsub: HttpResponseResolver = () => {
    const data:LoginWrapperResult = {
        resultCode:'400',
        result:{
            userId: 123,
            name: "user@example.com",
            nickName:"",
            result: true,
          }
    }
    return HttpResponse.json(data,{status:400})
}

