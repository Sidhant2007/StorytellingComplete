import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StoryScreen from "../screens/storyScreen";
import BottomTabNavigator from "./tabNavigation";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="StoryScreen" component={StoryScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
