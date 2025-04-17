import React from "react";
import LoginScreen from "@/screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterAccountScreen from "@/screens/RegisterAccountScreen";
import RegisterNicknameScreen from "@/screens/RegisterNicknameScreen";
import InternetCheck from "@/screens/InternetCheckScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterAccountScreen"
        component={RegisterAccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterNickname"
        component={RegisterNicknameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InternetCheck"
        component={InternetCheck}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
