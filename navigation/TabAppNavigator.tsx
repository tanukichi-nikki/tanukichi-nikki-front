import React from "react";
import TopScreen from "@/screens/TopScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function TabAppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Top" component={TopScreen} />
    </Stack.Navigator>
  );
}
