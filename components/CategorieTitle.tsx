import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

interface CategorieTitleProps {
  label: string;
  withIcon?: boolean;
  icon: ImageSourcePropType;
}

const CategorieTitle: React.FC<CategorieTitleProps> = ({
  label,
  icon,
  withIcon,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20,
      }}
    >
      <Text style={{ color: "#3A4276", fontSize: 16, fontWeight: "600" }}>
        {label}
      </Text>
      {withIcon && (
        <TouchableOpacity>
          <Image source={icon} style={{ width: 24 }} resizeMode="contain" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CategorieTitle;
