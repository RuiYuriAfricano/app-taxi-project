import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "../../components/CustomDrawerContent";
import { HomeClientMap } from "../homeClientMap";

const Drawer = createDrawerNavigator();

function Feed() {
  return <Text>Hello</Text>;
}

export function CustomerHome() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "#ffff",
        headerTitleStyle: {
          color: "#ffff",
        },
        headerStyle: {
          backgroundColor: "#F0C414",
        },
        drawerActiveTintColor: "#F0C414",
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        options={{
          drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
          drawerLabelStyle: {
            marginLeft: -20,
            padding: 0,
          },
          drawerLabel: "Home",
        }}
        name="Home"
        component={HomeClientMap}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="history" size={24} color="black" />
          ),
          drawerLabelStyle: {
            marginLeft: -20,
            padding: 0,
          },
          headerTitle: "Histórico de Viagem",
          drawerLabel: "Histórico",
        }}
        name="Article"
        component={Feed}
      />
    </Drawer.Navigator>
  );
}
