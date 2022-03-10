import client from "./client";
import Cookies from "js-cookie";

import { SignUpParams, SignInParams } from "interfaces";

//サインアップ
export const signUp = (params: SignUpParams) => {
  return client.post("auth", params)
}

//サインイン
export const signIn = (params: SignInParams) => {
  return client.post("auth", params)
};

//ログアウト
export const signOut = () => {
  return client.delete("auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      "client": Cookies.get("_client"),
      "uid": Cookies.get("_uid")
    }
  })
}

//認証済みのユーザー
export const getCurrentUser = () => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
  return client.get("/auth/sessions", {
    headers: {
      "access_token": Cookies.get("_access_token"),
      "client": Cookies.get("_client"),
      "uid": Cookies.get("_uid")
    }
  })
}
