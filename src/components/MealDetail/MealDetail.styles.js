import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    padding: 5,
  },
  image: {
    width: width - 10,
    height: height / 2.5,
    borderWidth: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
  },
});
