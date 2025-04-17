import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";

const TopScreen = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState(""); // ユーザー入力
  const [messages, setMessages] = useState<
    { id: string; text: string; sender: "user" | "ai" }[]
  >([{ id: "1", text: "こんにちは！今日は一日どうだったも？", sender: "ai" }]);

  const handleSend = () => {
    if (inputText.trim() === "") return;

    // ユーザーのメッセージを追加
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now().toString(), text: inputText, sender: "user" },
      {
        id: (Date.now() + 1).toString(),
        text: "実装中だも！もう少し待っても！",
        sender: "ai",
      }, // ダミーのAI返信
    ]);

    setInputText(""); // 入力フィールドをクリア
  };

  const renderItem = ({ item }: { item: { text: string; sender: string } }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.aiMessage,
      ]}
    >
      <View style={[styles.bubbleContainer]}>
        {item.sender === "ai" && <View style={styles.aiBubbleTail} />}
        <View
          style={[
            styles.bubble,
            item.sender === "user" ? styles.userBubble : styles.aiBubble,
          ]}
        >
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e0f7e0" }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={50} // テキストボックスとキーボードの間の設定
      >
        {/* チャット画面 */}
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ ...styles.chatContainer, paddingTop: 200 }}
        />

        {/* 入力フィールド */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="メッセージを入力しても！"
            value={inputText}
            onChangeText={setInputText}
            multiline={true} // ← 改行を有効にする
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Image
              source={require("../assets/images/leef.png")}
              style={styles.sendButtonText}
            />
          </TouchableOpacity>
        </View>

        {/* 画面左下に固定されたキャラクターアイコン */}
        <Image
          source={require("../assets/images/tanukichi-chat.png")}
          style={styles.fixedCharacterIcon}
        />

        <TouchableOpacity
          style={styles.settingsIconContainer}
          onPress={() => {
            router.push("/maintenance");
          }}
        >
          <Image
            source={require("../assets/images/maintenance.png")} // 設定アイコンの画像
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f7e0",
  },
  chatContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 80, // メッセージボックス分の余白
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  bubbleContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative", // 必須
  },
  aiMessage: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  userMessage: {
    flexDirection: "row-reverse",
    alignSelf: "flex-end",
  },
  characterIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 10,
  },
  bubble: {
    padding: 10,
    borderRadius: 15,
  },
  aiBubble: {
    backgroundColor: "#C8ECBE", // AIチャットのテキストボックスカラー
    borderTopLeftRadius: 0,
    shadowColor: "#000", // シャドウの色
    shadowOffset: { width: 0, height: 2 }, // シャドウの方向
    shadowOpacity: 0.25, // シャドウの透明度
    shadowRadius: 3.84, // シャドウのぼかし具合
  },
  aiBubbleTail: {
    position: "absolute",
    left: 20, // 吹き出しの位置を調整
    bottom: -10, // 吹き出しがメッセージの下に出るように調整
    width: 0,
    height: 0,
    borderLeftWidth: 10, // 左方向の三角形幅
    borderRightWidth: 10, // 右方向の三角形幅
    borderTopWidth: 10, // 上方向の三角形幅（iOSではborderBottomからborderTopに変更）
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#C8ECBE", // 吹き出しの背景色
  },
  userBubble: {
    backgroundColor: "#4CAF50",
    borderTopRightRadius: 0,
    shadowColor: "#000", // シャドウの色
    shadowOffset: { width: 0, height: 2 }, // シャドウの方向
    shadowOpacity: 0.25, // シャドウの透明度
    shadowRadius: 3.84, // シャドウのぼかし具合
  },
  messageText: {
    fontSize: 14,
    color: "#524E4B",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 45,
    width: "100%",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  sendButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    width: 30, // 適切な幅
    height: 30, // 適切な高さ
    resizeMode: "contain", // 画像を枠内に収める
    borderColor: "black",
  },
  fixedCharacterIcon: {
    position: "absolute",
    bottom: 100,
    left: 20,
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  settingsIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
});

export default TopScreen;
