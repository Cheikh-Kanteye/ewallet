import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Button, Input, RoundedBtn } from "../components";
import images from "../assets";
import { Platform } from "expo-modules-core";
import { StackParamList } from "../App";

const Data = [
  {
    id: "001",
    icon: images.facebook,
    bg: "rgb(41, 129, 238)",
  },
  {
    id: "002",
    icon: images.google,
    bg: "rgb(233, 65, 58)",
  },
  {
    id: "003",
    icon: images.apple,
    bg: "rgb(24, 24, 24)",
  },
];

type SignInProps = StackNavigationProp<StackParamList, "SignIn">;

const SignIn = () => {
  const navigation = useNavigation<SignInProps>();
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 2 }}
        behavior={Platform.OS === "android" ? "height" : "padding"}
      >
        <View style={[styles.contentContainer, { alignItems: "center" }]}>
          <View style={styles.row}>
            <Image source={images.logo} />
            <Text style={styles.logoText}>eWale</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.h1}>Welcome back</Text>
          <Input placeholder="Email/Phone Number" icon={"mail"} />
          <Input
            placeholder="Password"
            icon={"lock"}
            //   textInput={{ style: { marginBottom: 20 } }}
          />
          <View
            style={{
              ...styles.row,
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <View style={styles.row}>
              <View style={styles.check} />
              <Button
                label="Remember me"
                icon={0}
                onPress={() => console.log("sign up")}
              />
            </View>
            <Button
              label="forgot password?"
              icon={0}
              onPress={() => console.log("sign up")}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={[styles.contentContainer, { flex: 1.5 }]}>
        <Button
          label="Sign in"
          icon={0}
          isPrimary
          onPress={() => navigation.navigate("Main" as never)}
          cstyle={{ width: "100%", height: 45, borderRadius: 10 }}
        />
        <Text style={styles.text}>Or continue with</Text>
        <View
          style={{
            ...styles.row,
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          {Data.map((item) => {
            return (
              <RoundedBtn
                key={item.id}
                icon={item.icon}
                cstyle={{
                  width: 45,
                  height: 45,
                  borderRadius: 45,
                  backgroundColor: item.bg,
                  marginHorizontal: 8,
                }}
              />
            );
          })}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={{ alignSelf: "center", marginVertical: 8 }}
        >
          <Text>
            Don't have an account?
            <Text style={{ fontWeight: "bold", color: "#3A4276" }}>
              {" "}
              Sign up
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#3A4276",
    marginLeft: 5,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3A4276",
  },
  check: {
    width: 12,
    height: 12,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#3A4276",
    margin: 5,
  },
  text: {
    fontSize: 18,
    marginEnd: 5,
    textAlign: "center",
    paddingVertical: 14,
  },
});
