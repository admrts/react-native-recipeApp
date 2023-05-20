import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./ItemCard.styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemCard = ({ data }) => {
  const navigation = useNavigation();
  const handleTouch = () => {
    navigation.navigate("Category", { data, title: data.strCategory });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleTouch}>
      <View style={styles.image_title_container}>
        <Image style={styles.image} source={{ uri: data.strCategoryThumb }} />
        <Text style={styles.text}>{data.strCategory}</Text>
      </View>
      <AntDesign name="rightsquareo" size={24} color="#CFC7BC" />
    </TouchableOpacity>
  );
};

export default ItemCard;
