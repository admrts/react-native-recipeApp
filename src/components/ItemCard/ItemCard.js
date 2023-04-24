import { View, Text, Image } from "react-native";
import styles from "./ItemCard.styles";
import { AntDesign } from "@expo/vector-icons";

const ItemCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_title_container}>
        <Image style={styles.image} source={{ uri: data.strCategoryThumb }} />
        <Text style={styles.text}>{data.strCategory}</Text>
      </View>
      <AntDesign name="rightsquareo" size={24} color="#CFC7BC" />
    </View>
  );
};

export default ItemCard;
