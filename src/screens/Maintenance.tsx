import React, { useState } from "react";
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

export default function MaintenanceScreen() {
  const [userId, setUserId] = useState(""); // 現在のIDの状態
  const [newUserId, setNewUserId] = useState(""); // 入力された新しいID
  const [password, setPassword] = useState(""); // 現在のIDの状態
  const [newPassword, setNewPassword] = useState(""); // 入力された新しいID
  const [Name, setName] = useState(""); // 現在のIDの状態
  const [newName, setNewName] = useState(""); // 入力された新しいID

  const handleChangeUserId = () => {
    if (newUserId.trim() === "") {
      alert("ユーザーIDを入力してください");
      return;
    }
    setUserId(newUserId);
    setNewUserId("");
    alert(`ユーザーIDが ${newUserId} に変更されました`);
  };

  const handleChangePassword = () => {
    if (newPassword.trim() === "") {
      alert("パスワードを入力してください");
      return;
    }
    setPassword(newPassword);
    setNewPassword("");
    alert(`パスワードが ${newPassword} に変更されました`);
  };

  const handleChangeName = () => {
    if (newName.trim() === "") {
      alert("ニックネームを入力してください");
      return;
    }
    setName(newName);
    setNewName("");
    alert(`ニックネームが ${newName} に変更されました`);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
          <View style={styles.container}>
            <Text style={styles.label}>
              現在のユーザーID: {userId || "未設定"}
            </Text>

            <View style={styles.row}>
              <TextInput
                style={styles.input}
                placeholder="新しいユーザーIDを入力"
                value={newUserId}
                onChangeText={setNewUserId}
              />
              
              <TouchableOpacity
                style={styles.button}
                onPress={handleChangeUserId}
              >
                <Text style={styles.buttonText}>変更</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.label}>
              現在のパスワード: {password || "未設定"}
            </Text>

            <View style={styles.row}>
              <TextInput
                style={styles.input}
                placeholder="新しいパスワードを入力"
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={handleChangePassword}
              >
                <Text style={styles.buttonText}>変更</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.label}>
              現在のニックネーム: {Name || "未設定"}
            </Text>

            <View style={styles.row}>
              <TextInput
                style={styles.input}
                placeholder="新しいニックネームを入力"
                value={newName}
                onChangeText={setNewName}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={handleChangeName}
              >
                <Text style={styles.buttonText}>変更</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#e0f7e0", // 背景色
    flex: 1,
  },
  container: {
    paddingHorizontal: 20, // 横の余白
    paddingTop: 100, // 上部に余白
    paddingBottom: 10, // 下部にも余白を追加
  },
  container2: {
    paddingHorizontal: 20, // 横の余白
    paddingTop: 10, // 上部に余白
    paddingBottom: 10, // 下部にも余白を追加
  },
  label: {
    fontSize: 16,
    marginBottom: 10, // ラベルと入力フォームの間の余白
  },
  row: {
    flexDirection: "row", // 横並びにする
    justifyContent: "space-between", // 入力フォームとボタンの間にスペース
    alignItems: "center",
  },
  input: {
    width: "75%", // 入力フィールドの幅を調整
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#A3D5CC",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
