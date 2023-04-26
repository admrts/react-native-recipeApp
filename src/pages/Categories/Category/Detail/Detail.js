import React from "react";
import { View } from "react-native";
import MealDetail from "../../../../components/MealDetail/MealDetail";
import useFetch from "../../../../hooks/useFetch/useFetch";

export default function Detail({ route }) {
  const { data: detailData } = route.params;

  const { data, error, loading } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailData.idMeal}`
  );
  return (
    <View>
      <MealDetail data={data} error={error} loading={loading} />
    </View>
  );
}
