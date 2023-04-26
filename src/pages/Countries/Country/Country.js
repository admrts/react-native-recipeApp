import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import useFetchCountry from "../../../hooks/useFetch/useFetchCountry";
import MealCard from "../../../components/MealCard/MealCard";

export default function Country({ route }) {
  const { name } = route.params.data;
  const { data, error, loading } = useFetchCountry(
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
