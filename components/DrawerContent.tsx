import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import images from "../assets";
import Button from "./Button";

export const MENUS = [
  {
    name: "Home",
    label: "Home",
  },
  {
    name: "Profile",
    label: "Profile",
  },
  {
    name: "Accounts",
    label: "Accounts",
  },
  {
    name: "Transactions",
    label: "Transactions",
  },
  {
    name: "Stats",
    label: "Stats",
  },
  {
    name: "Settings",
    label: "Settings",
  },
  {
    name: "Help",
    label: "Help",
  },
];

const DrawerContent = (props: DrawerContentComponentProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarC}>
          <Image
            source={images.profile}
            style={{ width: 34, height: 34, marginBottom: -5 }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.userName}>Carol Black</Text>
          <Text>Seatle, Washington</Text>
        </View>
      </View>

      {/* Drawer menu content | body */}
      <View style={styles.body}>
        <DrawerContentScrollView>
          {MENUS.map((item, index) => {
            return (
              <DrawerItem
                key={index}
                activeBackgroundColor="#F1F3F6"
                pressOpacity={0}
                onPress={() => {
                  setActiveIndex(index);
                  props.navigation.navigate(item.name);
                }}
                focused={activeIndex === index}
                label={({ focused }) => {
                  return (
                    <View
                      style={{
                        paddingLeft: 20,
                        borderLeftWidth: 2,
                        borderLeftColor: focused ? "#FFAC30" : "transparent",
                        height: 25,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: focused ? "bold" : "400",
                        }}
                      >
                        {item.label}
                      </Text>
                    </View>
                  );
                }}
              />
            );
          })}
        </DrawerContentScrollView>
      </View>

      {/* footer  */}
      <View style={styles.footer}>
        <Button
          label="Logout"
          withIcon
          icon={images.power}
          cstyle={{
            width: 80,
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
          onPress={() => console.log("logout")}
        />
        <Text>Version 2.0.1</Text>
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 108,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: 55,
  },
  body: {
    flex: 3.5,
  },
  footer: {
    height: 120,
    justifyContent: "space-between",
    paddingBottom: 42,
    paddingHorizontal: 16,
  },
  avatarC: {
    width: 42,
    height: 42,
    borderRadius: 42,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#D8D9E4",
    overflow: "hidden",
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1B1D28",
  },
});
