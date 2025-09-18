import CustomButton from "@/components/Button";
import CustomButtonRegisterNickname from "@/components/Button_RegisterNickname";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
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
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingScreen from "./LoadingScreen";
import { RegisterNicknameApi } from "../api/RegisterNicknameAPI";
import { Alert } from "react-native";

export default function RegisterNicknameScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [nickName, setNickname] = useState("");

  const handleRegister = () => {
    router.push("/registerAccount");
  };

  const handleTop = async (nickName : string) => {
    setIsLoading(true); // ローディング開始
    try{

      console.log("API START:", nickName)
      const data = await RegisterNicknameApi(nickName); // API呼び出し
      console.log("API END:", nickName)

      if (data.result.nickName != null) {
        Alert.alert("登録成功!","たぬきちの世界へようこそだも！");
        router.push("/(tabs)/top"); // チャット画面に遷移
        } else {
          throw new Error(data.resultCode || "ニックネームの登録に失敗しました。");
        }
      } catch (error) {
        // エラーハンドリング
        alert("ニックネームの登録に失敗しました。");
      } finally {
        setIsLoading(false); // ローディング終了
      };
    }

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
          <Text style={styles.title}>たぬきちになんて呼ばれたい？</Text>
          <TextInput
            placeholder="ニックネーム"
            style={styles.input}
            value={nickName}
            onChangeText={setNickname}
          />

          <CustomButtonRegisterNickname
            title="登録"
            onPress={handleTop}
            style={undefined}
            nickname={nickName}
          />

          <CustomButton
            title="新規登録へ戻る"
            onPress={handleRegister}
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
