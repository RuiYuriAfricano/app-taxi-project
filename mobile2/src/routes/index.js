import { OnBoardingOne } from "../pages/onboardOne";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoadingScreen } from "../components/loading";
import { OnboardTwo } from "../pages/onboardTwo";
import { OnBoardThree } from "../pages/onBoardThree";
import { useApp } from "../context/app";
import { Login } from "../pages/login";
import { CustomerHome } from "../pages/customerHome";
import { DriverHome } from "../pages/driverHome";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export function RootRouter() {
  const { isFirstTime = null, loggedUser = null } = useApp();

  if (loggedUser?.cliente) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Customer"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="CustomerHome" component={CustomerHome} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  if (loggedUser?.motorista) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DriverHome"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="DriverHome" component={DriverHome} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  if (isFirstTime === false)
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  if (isFirstTime === true)
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OnBoardingOne"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="OnBoardingOne" component={OnBoardingOne} />
          <Stack.Screen name="OnboardTwo" component={OnboardTwo} />
          <Stack.Screen name="OnBoardThree" component={OnBoardThree} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
