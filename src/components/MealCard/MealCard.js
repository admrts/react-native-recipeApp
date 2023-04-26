import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./MealCard.styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MealCard = ({ data }) => {
  const navigation = useNavigation();
  const handleTouch = () => {
    navigation.navigate("Detail", { data });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleTouch}>
      <View style={styles.image_title_container}>
        <Image style={styles.image} source={{ uri: data.strMealThumb }} />
        <Text style={styles.text}>{data.strMeal}</Text>
      </View>
      <AntDesign name="rightsquareo" size={24} color="#CFC7BC" />
    </TouchableOpacity>
  );
};

export default MealCard;
