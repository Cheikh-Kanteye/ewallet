import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { Image } from "react-native";
import images from "../assets";
import { TouchableOpacity } from "react-native";
import { ImageSourcePropType } from "react-native";

interface ButtonProps {
  label: string;
  cstyle?: ViewStyle;
  isPrimary?: boolean;
  withIcon?: boolean;
  icon: ImageSourcePropType;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  cstyle,
  label,
  onPress,
  isPrimary,
  withIcon,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnC,
        cstyle,
        { backgroundColor: isPrimary ? "#FFAC30" : "transparent" },
      ]}
    >
      <Text
        style={{
          fontSize: isPrimary ? 18 : 15,
          fontWeight: isPrimary ? "bold" : "500",
          marginEnd: 5,
        }}
      >
        {label}
      </Text>
      {withIcon && (
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnC: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginEnd: 5,
  },
  icon: { marginTop: 3 },
});
