import React from "react";
import AppText from "../text/AppText";
import { styles } from "./styles";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;
