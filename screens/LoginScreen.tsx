import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import LoadingScreen from "./LoadingScreen";
import CustomButton from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { loginUser } from "./LoginAPI";

export default function LoginScreen() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(""); // ID用のステート
  const [password, setPassword] = useState(""); // パスワード用のステート

  const handleLogin = async (name: string, password: string) => {
    // setIsLoading(true); // ローディング開始
    console.log("name:", name);
    console.log("Password:", password);

    try {
      // ユーザー登録処理（擬似的な遅延を追加）
      // await new Promise((resolve) => setTimeout(resolve, 3000));
      const data = await loginUser(name, password); //APIを実行
      Alert.alert("ログイン成功", `ユーザー名: ${data.result.name}さん`);
      router.push("/top");
    } catch (error) {
      // エラーハンドリング
      alert("ログインに失敗しました。");
    } finally {
      setIsLoading(false); // ローディング終了
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  const handleRegister = () => {
    router.push("/registerAccount");
  };
  const handleDevelopLogin = () => {
    router.push("/internetCheck");
  };

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={require("../assets/animations/falling-leaves.json")} // 落ち葉アニメーションのパス
        autoPlay
        loop
        style={styles.backgroundAnimation}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formcontainer}>
          <Image
            source={require("../assets/images/tanukichi-removebg.png")}
            style={styles.image}
          />
          <Text style={styles.title}>ログインスするんだも！</Text>
          <TextInput
            placeholder="ID"
            style={styles.input}
            value={name}
            onChangeText={setName} // IDをステートに保存
          />
          <TextInput
            placeholder="パスワード"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword} // パスワードをステートに保存
          />
          <CustomButton
            title="ログイン"
            onPress={handleLogin} // ここでhandleLoginを呼び出す
            style={undefined}
            name={name} // nameを渡す
            password={password} // passwordを渡す
          />

          <Text>or</Text>

          <CustomButton
            title="新規登録"
            onPress={handleRegister}
            style={undefined}
          />

          <CustomButton
            title="開発者用ボタン"
            onPress={handleDevelopLogin}
            style={{ width: "40%", backgroundColor: "#ffff" }}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f7e0",
  },
  formcontainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    zIndex: 1, // ログインフォームが背景の上に来るように設定
    width: "100%",
  },
  backgroundAnimation: {
    position: "absolute", // 背景として表示するために絶対位置に設定
    width: "100%",
    height: "100%",
    zIndex: 0, // 背景アニメーションのzIndexを0に設定
    top: -210,
  },
  title: {
    color: "#548346",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Yomogi-Regurlar",
  },
  input: {
    borderWidth: 1,
    height: 60,
    padding: 20,
    marginBottom: 15,
    borderRadius: 30,
    width: "60%",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 5,
  },
});
