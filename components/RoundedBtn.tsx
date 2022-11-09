import {
  View,
  Text,
  ImageSourcePropType,
  ViewStyle,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

interface RoundedBtnProps {
  icon: ImageSourcePropType;
  cstyle: ViewStyle;
  isPrimary?: boolean;
  onPress?: () => void;
}

const RoundedBtn: React.FC<RoundedBtnProps> = ({ icon, isPrimary, cstyle }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isPrimary ? "#FFAC30" : "#F1F3F6",
        justifyContent: "center",
        alignItems: "center",
        ...cstyle,
      }}
    >
      <Image source={icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default RoundedBtn;
