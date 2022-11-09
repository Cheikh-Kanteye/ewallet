import { StatusBar, View } from "react-native";
import React from "react";
import { useDrawerProgress } from "@react-navigation/drawer";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

interface AnimatedViewProps {
  children: React.ReactNode;
}

const AnimatedView = ({ children }: AnimatedViewProps) => {
  const progress = useDrawerProgress();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#fff",
      }}
    >
      {children}
    </View>
  );
};

export default AnimatedView;
