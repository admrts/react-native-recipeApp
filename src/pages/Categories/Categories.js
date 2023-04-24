import { View, FlatList, StyleSheet } from "react-native";
import ItemCard from "../../components/ItemCard/ItemCard";
import useFetch from "../../hooks/useFetch/useFetch";

const Categories = () => {
  const { data, error, loading } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.idCategory}
        renderItem={({ item }) => <ItemCard data={item} />}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F5EB",
  },
});
