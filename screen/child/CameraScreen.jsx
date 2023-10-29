import { View, Text, Dimensions, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { CameraType, Camera } from "expo-camera";
import tw from "twrnc";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function CameraScreen() {
  const cameraRef = useRef(null);

  const takPic = async() => {
    let newPhoto = await cameraRef.current.takePictureAsync({
      quality: 1,
      base64: true,
      exif: false
    })
  }
  return (
    
    <Camera ref={cameraRef} style={style.camera}>
      <View style={tw``}>
        <Button title="Photo" />
      </View>
      {/* <StatusBar style="auto" /> */}
    </Camera>
    );
}


const style = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})