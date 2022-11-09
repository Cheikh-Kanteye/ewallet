import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "../components";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Button
        label="Sign up"
        icon={0}
        onPress={() => console.log("sign up")}
        cstyle={{ width: "100%", height: 45 }}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
