
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
import { useRouter } from "expo-router";

export default function DevLoginScreen() {
  const router = useRouter();
  const [id, setId] = useState(""); // ID用のステート
  const [password, setPassword] = useState(""); // パスワード用のステート

  const handledevLogin = async () => {
    router.push("/top");
  };

  const handledevRegister = () => {
    router.push("/devRegisterAccount")
  };

  const handleback = () => {
    router.push("/login")
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
          <Text style={styles.title}>開発者用ログイン画面だも！</Text>
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
            title="開発者用ログイン"
            onPress={handledevLogin}
            style={{ width: "40%",backgroundColor:"#ffff" }}
          />

          <Text>or</Text>

          <CustomButton
            title="開発者用新規登録"
            onPress={handledevRegister}
            style={{ width: "40%",backgroundColor:"#ffff" }}
          />

          <CustomButton
            title="通常画面へ戻る"
            onPress={handleback}
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
