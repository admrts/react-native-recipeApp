import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import MealCard from "../../../components/MealCard/MealCard";
import useFetch from "../../../hooks/useFetch/useFetch";

export default function Country({ route }) {
  const { name } = route.params.data;
  const { data, error, loading } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
  );
  if (error) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  }
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
