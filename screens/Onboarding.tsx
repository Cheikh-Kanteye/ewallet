import { Image, StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import images from "../assets";
import { API_KEY, API_URL, SPACING, width } from "../config";
import dayjs from "dayjs";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { Button } from "../components";
import { StackParamList } from "../App";
import axios from "axios";

const PATTERN_WIDTH = width * 0.35;

type OnboardingScreenProps = StackNavigationProp<StackParamList, "Onboarding">;

const Onboarding = () => {
  const navigation = useNavigation<OnboardingScreenProps>();
  const [date, setDate] = useState(dayjs());
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();
  const [temperature, setTemperature] = useState<number>(32);

  useEffect(() => {
    //get location
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await getCurrentPositionAsync({});
      setLat(location?.coords?.latitude);
      setLong(location?.coords?.latitude);
    })();

    //update date and time
    setInterval(() => {
      setDate(dayjs);
    }, 1000);

    (async () => {
      fetch(`${API_URL}lat=${lat}&lon=${long}&APPID=${API_KEY}&units=imperial`)
        .then((res) => res.json())
        .then((data) => {
          setTemperature(data.main.temp_max);
        })
        .catch((err) => console.log(err.message));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.patternC}>
        <Image
          source={images.pattern}
          style={{ height: "100%", width: PATTERN_WIDTH + 50 }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentC}>
        <View>
          <View style={{ ...styles.row, justifyContent: "space-between" }}>
            {/* <Clock /> */}
            <Text style={styles.h1}>{dayjs().format("hh:mmA")}</Text>
            <View style={styles.row}>
              <Image source={images.temp} />
              <Text style={styles.temp}>
                {Math.floor((temperature - 32) * (5 / 9))}° C
              </Text>
            </View>
          </View>

          <Text style={styles.p}>{date.format("MMM.DD.YYYY | dddd")}</Text>
        </View>
        <View>
          <Image source={images.logo} />
          <Text style={styles.h1}>{"\n"}eWalle</Text>
          <Text style={styles.p}>
            {"\n"}
            Open An Account For Digital E-Wallet Solutions.Instant Payouts.
            {"\n"}
            {"\n"}
            {"\n"} Join For Free.
          </Text>
        </View>
        <View style={{ paddingBottom: 58 }}>
          <Button
            label="Sign in"
            onPress={() => navigation.navigate("SignIn")}
            isPrimary
            withIcon
            icon={images.arrow}
            cstyle={{ width: "100%", borderRadius: 10, height: 45 }}
          />
          <Button
            label="Create an account"
            cstyle={{ marginTop: 20 }}
            onPress={() => navigation.navigate("SignUp")}
            icon={0}
          />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  patternC: {
    width: PATTERN_WIDTH,
    overflow: "hidden",
  },
  contentC: {
    flex: 2,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: SPACING / 3,
    justifyContent: "space-between",
  },
  h1: {
    fontSize: 24,
    fontWeight: "600",
  },
  p: {
    fontSize: 14,
    fontWeight: "500",
    color: "#7B7F9E",
  },
  row: { flexDirection: "row", alignItems: "center" },
  temp: { fontSize: 13, fontWeight: "bold", marginLeft: 5 },
});
