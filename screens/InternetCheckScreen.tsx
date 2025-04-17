// import React, { useEffect, useState } from "react";
// import { View, Text, Linking, Alert, Button } from "react-native";
// import NetInfo from "@react-native-community/netinfo";

// export default function InternetCheck () {
//   const [isConnected, setIsConnected] = useState<boolean | null>(null);
//   const [googleStatus, setGoogleStatus] = useState("Checking...");

//   const openURL = async () => {
//     const url = 'http://tanukichi-alb-1740587537.ap-northeast-1.elb.amazonaws.com/api/v1/test'; // ALBのURL

//     const supported = await Linking.canOpenURL(url);
//     if (supported) {
//       // ブラウザを開く
//       await Linking.openURL(url);
//     } else {
//       // URLがサポートされていない場合
//       Alert.alert(`Cannot open this URL: ${url}`);
//     }
//   };
//   return (
    
//       <Button title="Open ALB in Browser" onPress={openURL} />
//   )
// }

import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function InternetCheck() {
  const [apiResponse, setApiResponse] = useState(null); // APIの応答を格納

  const fetchData = async () => {
    const url = 'http://tanukichi-alb-1407649377.ap-northeast-1.elb.amazonaws.com'; // ALBのURL

    try {
      const response = await axios.get(url); // HTTPリクエストを送信
      setApiResponse(response.data); // レスポンスデータをステートに保存
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert('Error', 'Failed to fetch data from the server.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Fetch Data from ALB" onPress={fetchData} />
      {apiResponse ? (
        <View style={styles.responseContainer}>
          <Text style={styles.responseText}>API Response:</Text>
          <Text>{JSON.stringify(apiResponse, null, 2)}</Text>
        </View>
      ) : (
        <Text>No data fetched yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  responseContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    width: '100%',
  },
  responseText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
