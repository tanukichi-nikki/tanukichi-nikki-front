import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";

export default function PersonalScreen() {
  // const router = useRouter();

  // const handleRegister = () => {
  //   // ログイン成功後、ホーム画面へ遷移
  //   router.push("/");
  // };

  return (
    <View style={styles.container}>
      <Text>personal setting now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#e0f7e0",
  }
});
