import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { RoundedBtn, ScaledView } from "../components";
import { height, width } from "../config";
import images from "../assets";
import { useNavigation } from "@react-navigation/native";
import { DrawerParamList } from "../App";
import { DrawerNavigationProp } from "@react-navigation/drawer";
const Profile = () => {
  const navigation =
    useNavigation<DrawerNavigationProp<DrawerParamList, "Profile">>();

  return (
    <ScaledView style={{ paddingHorizontal: 0, overflow: "hidden" }}>
      <View
        style={[
          styles.backdrop,
          { backgroundColor: "#6602CC", top: -30, right: -85 },
        ]}
      />
      <View
        style={[
          styles.backdrop,
          { backgroundColor: "#FFAC30", top: 150, left: -175 },
        ]}
      />
      <BlurView intensity={100} style={styles.blurview} />
      <View style={styles.container}>
        <View style={{ height: height * 0.4, paddingHorizontal: 20 }}>
          <View style={styles.rowBetween}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.openDrawer()}
            >
              <Feather name="chevron-left" size={22} color={"#3A4276"} />
            </TouchableOpacity>
            <Text
              style={{ fontSize: 20, color: "#3A4276", fontWeight: "bold" }}
            >
              Profile
            </Text>
            <View style={{ width: 45 }} />
          </View>
          <View style={styles.profileContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                source={images.userProfile}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <Feather name="edit" size={14} color={"#3A4276"} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "#3A4276",
              paddingTop: 10,
            }}
          >
            {"Jimmy Sullivan"}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 28,
              color: "#3A4276",
              opacity: 0.5,
            }}
          >
            {"@jimmy28"}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.card}>
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
          <View
            style={{
              flex: 1,
              paddingTop: 85,
              paddingHorizontal: 16,
            }}
          >
            <View
              style={{
                width: "100%",
                height: 70,
                backgroundColor: "#fff",
                shadowOpacity: 0.1,
                shadowRadius: 12,
                shadowOffset: {
                  width: 5,
                  height: 3,
                },
              }}
            >
              <Text>QR Code</Text>
            </View>
          </View>
        </View>
      </View>
    </ScaledView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    height: height * 0.6,
    backgroundColor: "#fff",
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
  },
  backdrop: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    opacity: 0.3,
  },
  blurview: {
    ...StyleSheet.absoluteFillObject,
  },
  backBtn: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  profileImageContainer: {
    overflow: "hidden",
    flex: 1,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  editBtn: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 26,
    height: 26,
    borderRadius: 13,
    bottom: -5,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  card: {
    width: width - 32,
    height: 115,
    borderRadius: 12,
    backgroundColor: "#F1F3F6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    top: -50,
    position: "absolute",
    alignSelf: "center",
    zIndex: 10,
  },
  balance: {
    color: "#171822",
    fontSize: 24,
    fontWeight: "bold",
  },
});
