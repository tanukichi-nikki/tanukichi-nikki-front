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
} from "react-native";
import CustomButton from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";

export default function DevRegisterAccountScreen() {
  const router = useRouter();

  const [id, setId] = useState(""); // ID用のステート
  const [password, setPassword] = useState(""); // パスワード用のステート

  const handledevLogin = () => {
    router.push("/devLogin");
  };

  const handledevRegister = async () => {
    router.push("/devRegisterNickname");
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
          <Text style={styles.title}>開発者用登録画面だも！</Text>
          <TextInput
            placeholder="ID"
            style={styles.input}
            value={id}
            onChangeText={setId} // IDをステートに保存
          />
          <TextInput
            placeholder="パスワード"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword} // パスワードをステートに保存
          />
          <CustomButton
            title="開発者用登録"
            onPress={handledevRegister}
            style={{ width: "40%", backgroundColor: "#ffff" }}
          />

          <CustomButton
            title="開発者用ログインへ戻る"
            onPress={handledevLogin}
            style={{ width: "60%", backgroundColor: "#ffff" }}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
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
