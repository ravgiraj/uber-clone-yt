import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectTraveltimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "UberXL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-X-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

//IF WE HAVE SURE PRICING, THIS GOES UP
const SURGE_CHARGE_RATE = 1.5;

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTraveltimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`flex flex-row items-center justify-between`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`rounded-full w-1/5`}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl w-4/5`}>
          Select a ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex  flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text}Travel time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-INR", {
                style: "currency",
                currency: "INR",
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black absolute bottom-0 z-20 left-0 right-0 rounded-lg py-3 m-3 ${
            !selected && "bg-gray-300"
          }`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
