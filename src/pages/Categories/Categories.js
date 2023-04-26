import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import ItemCard from "../../components/ItemCard/ItemCard";
import useFetchCategories from "../../hooks/useFetch/useFetchCategories";

const Categories = () => {
  const { data, error, loading } = useFetchCategories(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.idCategory}
        renderItem={({ item }) => <ItemCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F5EB",
  },
});
