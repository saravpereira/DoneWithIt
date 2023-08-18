import React from "react";
import { View, Modal } from "react-native";
import { styles } from "./styles";
import * as Progress from "react-native-progress";
import colors from "../../constants/colors";

const UploadScreen = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar
          color={colors.primaryColor}
          progress={progress}
          width={200}
        />
      </View>
    </Modal>
  );
};

export default UploadScreen;
