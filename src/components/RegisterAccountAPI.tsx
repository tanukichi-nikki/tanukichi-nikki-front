export async function RegisterAccountAPI(id: string, password: string) {
    try {
      const response = await fetch("https://api/v1/register/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, password }),
      });
  
      if (!response.ok) {
        throw new Error("ログインに失敗しました。");
      }
  
      const data = await response.json();
      return data; // APIからのレスポンスデータを返す
    } catch (error) {
      console.error(error);
      throw error;
    }
  }