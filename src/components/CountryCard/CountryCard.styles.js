import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    margin: 10,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E4DCCF",
    justifyContent: "space-between",
  },
  image_title_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 120,
    height: 70,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    fontWeight: "600",
    fontSize: 18,
  },
});
