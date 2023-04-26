import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import countryData from "../../countryData/db.json";
import CountryCard from "../../components/CountryCard/CountryCard";

const Countries = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={countryData.country}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CountryCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default Countries;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F5EB",
  },
});
