import React from "react";
import { View, Text } from "react-native";
import useFetchDetail from "../../../../hooks/useFetch/useFetchDetail";
import MealDetail from "../../../../components/MealDetail/MealDetail";

export default function Detail({ route }) {
  const { data: detailData } = route.params;

  const { data, error, loading } = useFetchDetail(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailData.idMeal}`
  );
  return (
    <View>
      <MealDetail data={data} error={error} loading={loading} />
    </View>
  );
}
