import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CHAT, EVENT, LOCATION, NEWS, PROFILE } from "../constants/routeNames";
import News from "../screens/News/index";
import Chat from "../screens/Chat/index";
import Event from "../screens/Event/index";
import Location from "../screens/Location/index";
import Profile from "../screens/Profile/index";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../assets/theme/colors";
import { Screen, screensEnabled } from "react-native-screens";

const HomeNavigator = () => {
  const HomeStack = createBottomTabNavigator();
  return (
    <HomeStack.Navigator
      tabBarOptions={{
        activeTintColor: colors.buttonColor,
        inactiveTintColor: "white",
        style: { backgroundColor: colors.primaryWhite },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "News") {
            iconName = focused ? "home-outline" : "home-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbubble-outline" : "chatbubble-outline";
          } else if (route.name === "Event") {
            iconName = focused ? "add-circle-outline" : "add-circle-outline";
          } else if (route.name === "Location") {
            iconName = focused ? "location-sharp" : "location-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-outline" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <HomeStack.Screen name={NEWS} component={News}></HomeStack.Screen>
      <HomeStack.Screen name={CHAT} component={Chat}></HomeStack.Screen>
      <HomeStack.Screen name={EVENT} component={Event}></HomeStack.Screen>
      <HomeStack.Screen name={LOCATION} component={Location}></HomeStack.Screen>
      <HomeStack.Screen name={PROFILE} component={Profile}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
