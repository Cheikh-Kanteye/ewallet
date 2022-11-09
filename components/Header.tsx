import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import images from "../assets";

interface HeaderProps {
  openDrawer: () => void;
}

const Header = ({ openDrawer }: HeaderProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={images.logo}
          style={{
            width: 48,
            height: 32,
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 24, fontWeight: "700" }}>eWall</Text>
      </View>
      <TouchableOpacity onPress={openDrawer}>
        <Image
          source={images.menu}
          style={{ width: 19, height: 19 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
