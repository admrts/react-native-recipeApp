import { View, Text } from "react-native";
import { BASE_URL } from "@env";
import { useEffect } from "react";

const Categories = () => {
  useEffect(() => {
    console.log("w" + BASE_URL);
  }, []);
  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
};

export default Categories;
