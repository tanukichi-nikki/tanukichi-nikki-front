import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: (() => void) | ((name: string, password: string) => Promise<void>);
  style?: object; // オプショナルプロパティ
  name?: string;
  password?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  name,
  password,
}) => {
  const handlePress = (event: GestureResponderEvent) => {
    console.log("ボタンを押したときのname:", name, "ボタンを押したときのpassword:", password);

    if (typeof onPress === "function") {
      if (onPress.length === 2) {
        if (name && password) {
          (onPress as (name: string, password: string) => Promise<void>)(
            name,
            password
          );
        } else {
          console.warn("ユーザー名とパスワードが渡されていません。");
        }
      } else {
        (onPress as () => void)();
      }
    }
  };

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={handlePress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  buttonText: {
    color: "#524E4B", // ボタンの文字色
    fontSize: 16,
  },
});

export default CustomButton;
