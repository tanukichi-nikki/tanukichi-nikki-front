// tabが必要ないindex
import AppNavigator from "@/navigation/AppNavigator";
import React, { useEffect } from "react";
import { Audio } from "expo-av";

// async function enableMocking() {
//   if (!__DEV__) {
//     return;
//   }

//   await import("../public/msw.polyfills");
//   const { server } = await import("../mocks/server");
//   server.listen();
// }

// enableMocking();

export default function App() {
  // useEffect(() => {
  //   const playSound = async () => {
  //     try {
  //       const { sound } = await Audio.Sound.createAsync(
  //         require("@/assets/sounds/test.mp3")
  //       );
  //       await sound.playAsync(); // 音声を再生
  //     } catch (error) {
  //       console.error("音声再生エラー:", error);
  //     }
  //   };

  //   playSound();
  // }, []);
  return <AppNavigator />;
}

// if (process.env.NODE_ENV === "development"){
//   void import ("../mocks/browser").then(({worker}) => {
//     void worker
//     .start({
//       serviceWorker:{
//         url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
//       },
//     })
//     .then(App);
//   });
// }else App();
