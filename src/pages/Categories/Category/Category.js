import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import useFetchCategory from "../../../hooks/useFetch/useFetchCategory";
import MealCard from "../../../components/MealCard/MealCard";

export default function Category({ route }) {
  const { data: mealData } = route.params;
  const { data, error, loading } = useFetchCategory(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealData.strCategory}`
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => <MealCard data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 100,
    resizeMode: "contain",
  },
});
