import React, { useEffect } from "react";
import { View, Image, TouchableWithoutFeedback, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./styles";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) {
      alert("You need to enable permission to access");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handleOnPress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  const selectImage = async () => {
    try {
      const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!canceled) {
        onChangeImage(assets[0].uri);
      }
    } catch (error) {
      console.log("Image error", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.defaultImage} />
      ) : (
        <View style={[styles.defaultImage, styles.camera]}>
          <MaterialCommunityIcons name="camera" size={35} color="gray" />
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;
