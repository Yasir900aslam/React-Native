import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
};

const HomeNavigator = createStackNavigator(
  {
    Signup: SignupScreen,
    // Signin: SigninScreen,
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);
export default createAppContainer(HomeNavigator);
