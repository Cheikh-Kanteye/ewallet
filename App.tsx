import "react-native-gesture-handler";
import { useEffect } from "react";
import {
  setBackgroundColorAsync,
  setPositionAsync,
  setButtonStyleAsync,
} from "expo-navigation-bar";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import {
  Accounts,
  Help,
  Home,
  Onboarding,
  Profile,
  Settings,
  SignIn,
  SignUp,
  Stats,
  Transactions,
} from "./screens";
import { DrawerContent } from "./components";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Accounts: undefined;
  Transactions: undefined;
  Stats: undefined;
  Settings: undefined;
  Help: undefined;
};

export type StackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Main: NavigatorScreenParams<DrawerParamList>;
};

const Stack = createStackNavigator<StackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        overlayColor: "transparent",
        drawerStyle: {
          flex: 1,
          width: "60%",
          backgroundColor: "transparent",
        },
        sceneContainerStyle: {
          backgroundColor: "transparent",
        },
      }}
      initialRouteName="Home"
      drawerContent={(props) => {
        return <DrawerContent {...props} />;
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Accounts" component={Accounts} />
      <Drawer.Screen name="Transactions" component={Transactions} />
      <Drawer.Screen name="Stats" component={Stats} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};

export default function App() {
  useEffect(() => {
    setPositionAsync("absolute");
    setBackgroundColorAsync("rgba(255, 255, 255, 0.01)");
    setButtonStyleAsync("dark");
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
