import {
  StyleSheet,
  Text,
  View,
  TextInputProps,
  TextInput,
  ImageSourcePropType,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

interface InputProps {
  textInput?: TextInputProps;
  placeholder?: string;
  icon: keyof typeof Feather.glyphMap;
}

const Input = ({ textInput, placeholder, icon }: InputProps) => (
  <View style={styles.inputC}>
    {icon && <Feather name={icon} size={22} color={"grey"} />}
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="grey"
      {...textInput}
      style={styles.input}
    />
  </View>
);

export default Input;

const styles = StyleSheet.create({
  inputC: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    width: "100%",
    marginVertical: 8,
    gap: 10,
  },
  input: {
    flex: 1,
    height: 45,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#3A4276",
  },
});
