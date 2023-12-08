import { StyleSheet, Text, View, Stack } from "react-native";
import React from "react";
import Map from "../components/Map";
import tw from "tailwind-react-native-classnames";
import NavigateCard from "../components/NavigateCard";
// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RideOptionCard from "../components/RideOptionCard";

const MapScreens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreens;

const styles = StyleSheet.create({});
