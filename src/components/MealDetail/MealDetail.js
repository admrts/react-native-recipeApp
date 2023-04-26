import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./MealDetail.styles";

export default function MealDetail({ data, error, loading }) {
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
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: data.strMealThumb }} />
      <Text style={styles.title}>{data.strMeal}</Text>
      <Text style={styles.text}>{data.strInstructions}</Text>
    </ScrollView>
  );
}
