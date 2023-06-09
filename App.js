import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./src/pages/Categories/Categories";
import Category from "./src/pages/Categories/Category/Category";
import Countries from "./src/pages/Countries/Countries";
import Country from "./src/pages/Countries/Country/Country";
import Detail from "./src/pages/Categories/Category/Detail/Detail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CategoriesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#EA5455" },
        headerTitleStyle: { color: "#F9F5EB" },
        headerTintColor: "#F9F5EB",
      }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Category"
        component={Category}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

const CountriesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#EA5455" },
        headerTitleStyle: { color: "#F9F5EB" },
        headerTintColor: "#F9F5EB",
      }}
    >
      <Stack.Screen name="Countries" component={Countries} />
      <Stack.Screen
        name="Country"
        component={Country}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Categories "
          component={CategoriesStack}
          options={{
            tabBarIcon: () => {
              return (
                <MaterialIcons name="category" size={24} color="#EA5455" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Countries "
          component={CountriesStack}
          options={{
            tabBarIcon: () => {
              return <AntDesign name="earth" size={24} color="#EA5455" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
