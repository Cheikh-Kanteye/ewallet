import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  ViewStyle,
  StatusBar,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DrawerNavigationProp,
  useDrawerProgress,
} from "@react-navigation/drawer";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { CategorieTitle, Header, RoundedBtn } from "../components";
import images from "../assets";
import { width, CONTACTS, SERVICES } from "../config";
import { DrawerParamList } from "../App";
import Animated, {
  Extrapolate,
  useAnimatedStyle,
} from "react-native-reanimated";

interface HomeProps {
  navigation: DrawerNavigationProp<DrawerParamList, "Home">;
}

const Home = ({ navigation }: HomeProps) => {
  const progress = useDrawerProgress();
  //@ts-ignore
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.75],
    extrapolate: Extrapolate.CLAMP,
  });
  //@ts-ignore
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
    extrapolate: Extrapolate.CLAMP,
  });
  //@ts-ignore
  const rotate = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: ["0deg", "-10deg"],
    extrapolate: Extrapolate.CLAMP,
  });
  const animatedStyle = {
    transform: [{ scale }, { rotateZ: rotate }],
    borderRadius,
  };

  return (
    //@ts-ignore
    <Animated.View style={[styles.container, animatedStyle]}>
      <Header
        openDrawer={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <View>
        <CategorieTitle label="Account OverView" icon={0} />
        <View style={styles.balanceCard}>
          <View>
            <Text style={styles.balance}>20,600</Text>
            <Text style={{ fontSize: 12, color: "#3A4276" }}>
              {"\n"}
              Current balance
            </Text>
          </View>
          <RoundedBtn
            icon={images.plus}
            cstyle={{ width: 48, height: 48, borderRadius: 48 }}
            isPrimary
          />
        </View>
      </View>

      <View>
        <CategorieTitle label="Send Money" withIcon icon={images.scan} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
          snapToInterval={140}
        >
          <RoundedBtn
            icon={images.plus}
            cstyle={{
              width: 48,
              height: 48,
              borderRadius: 48,
              marginRight: 20,
            }}
            isPrimary
          />
          {CONTACTS.map((item) => {
            return (
              <TouchableOpacity key={item.id} style={styles.contact}>
                <View style={styles.avatarC}>
                  <Image
                    source={item.avatar}
                    style={{ width: 34, height: 34, marginBottom: -5 }}
                    resizeMode="contain"
                  />
                </View>
                <Text>Mike</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View>
        <CategorieTitle label="Services" withIcon icon={images.filter} />
        <View>
          <FlatList
            data={SERVICES}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            numColumns={4}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    marginBottom: 16,
                  }}
                >
                  <RoundedBtn
                    icon={item.icon}
                    cstyle={{
                      width: 60,
                      height: 60,
                      borderRadius: 12,
                    }}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 10,
                      color: "#7B7F9E",
                      paddingTop: 6,
                    }}
                  >
                    {item.label}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  balanceCard: {
    width: width - 32,
    height: 115,
    borderRadius: 12,
    backgroundColor: "#F1F3F6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  balance: {
    color: "#171822",
    fontSize: 24,
    fontWeight: "bold",
  },
  contact: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#F1F3F6",
    borderRadius: 10,
  },
  avatarC: {
    width: 42,
    height: 42,
    borderWidth: 2,
    borderRadius: 42,
    borderColor: "#D8D9E4",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
});
