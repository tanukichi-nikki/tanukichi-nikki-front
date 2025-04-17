import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            backgroundColor: "#A0CF94"
            // Colors[colorScheme ?? "tabs"].background, 
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="top"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
              ? require("@/assets/images/leefButtonSub.png")
              : require("@/assets/images/leefButtonMain.png")}
              style={{ width: 100, height: 50, bottom:-15 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="diary"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Image
            source={
              focused
            ? require("@/assets/images/diaryButtonSub.png")
            : require("@/assets/images/diaryButton.png")}
              style={{ width: 100, height: 50, bottom:-15 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="personal"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Image
            source={
              focused
            ? require("@/assets/images/donguriButtonSub.png")
            : require("@/assets/images/donguriButton.png")}
              style={{ width: 100, height: 50, bottom:-15 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      
    </Tabs>
  );
}
