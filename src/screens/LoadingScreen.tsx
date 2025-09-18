import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
} from "react-native";

export default function LoginScreen() {
  const ochiba1AnimY = useRef(new Animated.Value(0)).current; // 縦方向
  const ochiba1AnimX = useRef(new Animated.Value(0)).current; // 横方向
  const ochiba2AnimY = useRef(new Animated.Value(0)).current;
  const ochiba2AnimX = useRef(new Animated.Value(0)).current;
  const ochiba3AnimY = useRef(new Animated.Value(0)).current;
  const ochiba3AnimX = useRef(new Animated.Value(0)).current;
  const ochiba4AnimY = useRef(new Animated.Value(0)).current;
  const ochiba4AnimX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 縦方向アニメーション
    const createFallingAnimation = (animY: Animated.Value | Animated.ValueXY, animX: Animated.Value | Animated.ValueXY, delay: number) => {
      Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(animY, {
              toValue: 1,
              duration: 4000,
              delay,
              useNativeDriver: true,
            }),
            Animated.timing(animY, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }),
          ]),
          Animated.sequence([
            Animated.timing(animX, {
              toValue: 1,
              duration: 2000,
              delay,
              useNativeDriver: true,
            }),
            Animated.timing(animX, {
              toValue: -1,
              duration: 2000,
              useNativeDriver: true,
            }),
          ]),
        ])
      ).start();
    };

    createFallingAnimation(ochiba1AnimY, ochiba1AnimX, 0);
    createFallingAnimation(ochiba2AnimY, ochiba2AnimX, 500);
    createFallingAnimation(ochiba3AnimY, ochiba3AnimX, 1000);
    createFallingAnimation(ochiba4AnimY, ochiba4AnimX, 1500);
  }, []);

  const getFallingStyle = (animY: Animated.Value, animX: Animated.Value) => ({
    transform: [
      {
        translateY: animY.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 500], // 落下距離
        }),
      },
      {
        translateX: animX.interpolate({
          inputRange: [-1, 1],
          outputRange: [-50, 50], // 左右に揺れる幅
        }),
      },
      {
        rotate: animY.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "720deg"], // 回転
        }),
      },
    ],
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Loading.png")}
        style={styles.image}
      />
      <Animated.Image
        source={require("../assets/images/leef-sub.png")}
        style={[styles.ochiba, getFallingStyle(ochiba1AnimY, ochiba1AnimX)]}
      />
      <Animated.Image
        source={require("../assets/images/leef.png")}
        style={[styles.ochiba, getFallingStyle(ochiba2AnimY, ochiba2AnimX)]}
      />
      <Animated.Image
        source={require("../assets/images/leef.png")}
        style={[styles.ochiba, getFallingStyle(ochiba3AnimY, ochiba3AnimX)]}
      />
      <Animated.Image
        source={require("../assets/images/leef-sub.png")}
        style={[styles.ochiba, getFallingStyle(ochiba4AnimY, ochiba4AnimX)]}
      />
      <Text style={styles.text}>ちょっとまってね...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7e0",
  },
  image: {
    width: 200,
    height: 120,
    top: 550,
    position: "absolute",
  },
  ochiba: {
    width: 65,
    height: 65,
    position: "absolute",
    top: 100,
  },
  text: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
});
