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
import { RegisterAccountApi } from "../api/RegisterAPI";

export default function RegisterAccountScreen() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(""); // ID用のステート
  const [password, setPassword] = useState(""); // パスワード用のステート

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = async () => {
    setIsLoading(true); // ローディング開始
    try {
      // ユーザー登録処理（擬似的な遅延を追加）
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      const data = await RegisterAccountApi(name, password); // API呼び出し

      if (data.result.name != null) {
        Alert.alert("登録成功!","次はニックネームを登録してね");
        router.push("/registerNickname"); // ログイン成功後の画面遷移
      } else {
        throw new Error(data.resultCode || "登録に失敗しました。");
      }

    } catch (error) {
      // エラーハンドリング
      alert("登録に失敗しました。");
    } finally {
      setIsLoading(false); // ローディング終了
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

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
          <Text style={styles.title}>新しくアカウントを作っても！</Text>
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
            title="登録"
            onPress={handleRegister}
            style={undefined}
            name={name}
            password={password}
          />

          <CustomButton
            title="ログインへ戻る"
            onPress={handleLogin}
            style={{ width: "40%" }}
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
    top: -200,
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
  button: {
    backgroundColor: "#A3D5CC",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    width: "30%",
    margin: 10,
    shadowColor: "#000", // 影の色
    shadowOffset: { width: 0, height: 4 }, // 影のオフセット
    shadowOpacity: 0.3, // 影の不透明度
    shadowRadius: 3, // 影のぼかし範囲
    borderWidth: 1,
    borderColor: "#8BB5AA", // 内側の濃い色
  },
  buttonLogin: {
    backgroundColor: "#A3D5CC",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    width: "40%",
    margin: 10,
    shadowColor: "#000", // 影の色
    shadowOffset: { width: 0, height: 4 }, // 影のオフセット
    shadowOpacity: 0.3, // 影の不透明度
    shadowRadius: 3, // 影のぼかし範囲
    borderWidth: 1,
    borderColor: "#8BB5AA", // 内側の濃い色
  },
  buttonText: {
    color: "#524E4B", // ボタンの文字色
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#ffff", // ボタンの文字色
    fontSize: 16,
  },
});
