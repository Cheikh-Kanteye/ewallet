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

interface InputProps {
  textInput?: TextInputProps;
  placeholder?: string;
  icon: ImageSourcePropType;
}

const Input = ({ textInput, placeholder, icon }: InputProps) => {
  return (
    <View style={styles.inputC}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="grey"
        {...textInput}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputC: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#3A4276",
    marginVertical: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
