import CustomButton from "@/components/Button";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DevRegisterNicknameScreen() {
  const router = useRouter();

  const handledevRegister = () => {
    router.push("/devRegisterAccount");
  };

  const handleTop = () => {
    alert("たぬきちの世界へようこそだも！");
    router.push("/(tabs)/top");
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
          <Text style={styles.title}>開発者用たぬきちになんて呼ばれたい？</Text>
          <TextInput placeholder="ニックネーム" style={styles.input} />
          <CustomButton
            title="開発者用登録"
            onPress={handleTop}
            style={{ width: "40%",backgroundColor:"#ffff" }}
          />

          <CustomButton
            title="開発用新規登録へ戻る"
            onPress={handledevRegister}
            style={{ width: "50%",backgroundColor:"#ffff" }}
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
    top: -170,
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
