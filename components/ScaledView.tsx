import { View, Text, ViewStyle, StatusBar } from "react-native";
import React from "react";
import { useDrawerProgress } from "@react-navigation/drawer";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";

interface ScaledViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const ScaledView = ({ children, style }: ScaledViewProps) => {
  const progress = useDrawerProgress();
  const scale = useDerivedValue(() => {
    return interpolate(progress.value, [0, 1], [1, 0.75], Extrapolate.CLAMP);
  });
  const borderRadius = useDerivedValue(() => {
    return interpolate(progress.value, [0, 1], [0, 30], Extrapolate.CLAMP);
  });
  const rotate = useDerivedValue(() => {
    return interpolate(progress.value, [0, 1], [0, 10], Extrapolate.CLAMP);
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { rotateZ: -rotate.value + "deg" }],
      borderRadius: borderRadius.value,
    };
  });
  return (
    <Animated.View style={[styles.container, animatedStyle, style]}>
      {children}
    </Animated.View>
  );
};

export default ScaledView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
});
