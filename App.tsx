const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import LaunchScreen from "./screens/LaunchScreen";
import SignIn from "./screens/SignIn";
import SignUpWithEmailInputEma from "./screens/SignUpWithEmailInputEma";
import FreeEvent from "./screens/FreeEvent";
import PaidEvent from "./screens/PaidEvent";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Manrope-Light": require("./assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Lexend-Regular": require("./assets/fonts/Lexend-Regular.ttf"),
    "Lexend-Bold": require("./assets/fonts/Lexend-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaunchScreen"
              component={LaunchScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpWithEmailInputEma"
              component={SignUpWithEmailInputEma}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FreeEvent"
              component={FreeEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaidEvent"
              component={PaidEvent}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
