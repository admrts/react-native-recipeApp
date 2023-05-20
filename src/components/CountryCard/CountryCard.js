import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import styles from "./CountryCard.styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CountryCard = ({ data }) => {
  const navigation = useNavigation();

  const handleTouch = () => {
    navigation.navigate("Country", { data, title: data.name });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleTouch}>
      <View style={styles.image_title_container}>
        <Image style={styles.image} source={{ uri: data.flag }} />
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <AntDesign name="rightsquareo" size={24} color="#CFC7BC" />
    </TouchableOpacity>
  );
};

export default CountryCard;
