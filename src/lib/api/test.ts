import client from "./client";
//テスト用
export const execTest = () => {
  return client.get("/test")
}
