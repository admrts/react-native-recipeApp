import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "./src/pages/Categories/Categories";
import Countries from "./src/pages/Countries/Countries";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarIcon: () => {
              return (
                <MaterialIcons name="category" size={24} color="#EA5455" />
              );
            },
            tabBarInactiveTintColor: "#002B5B",
            tabBarActiveTintColor: "#EA5455",
            headerStyle: { backgroundColor: "#EA5455" },
            headerTitleStyle: { color: "#F9F5EB" },
          }}
        />
        <Tab.Screen
          name="Countries"
          component={Countries}
          options={{
            tabBarIcon: () => {
              return <AntDesign name="earth" size={24} color="#EA5455" />;
            },
            tabBarInactiveTintColor: "#002B5B",
            tabBarActiveTintColor: "#EA5455",
            headerStyle: { backgroundColor: "#EA5455" },
            headerTitleStyle: { color: "#F9F5EB" },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
