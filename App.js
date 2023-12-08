import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreens from "./screens/MapScreens";
import RideOptionCard from "./components/RideOptionCard";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();

  const headerOptions = {
    headerShown: false,
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={headerOptions}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreens}
                options={headerOptions}
              />
              <Stack.Screen
                name="RideOptionCard"
                component={RideOptionCard}
                options={headerOptions}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
