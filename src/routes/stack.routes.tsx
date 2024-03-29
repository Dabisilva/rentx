import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Schedulle } from "../screens/Schedulle";
import { SchedullingComplete } from "../screens/SchedullingComplete";
import { SchedullingDetails } from "../screens/SchedullingDetails";
import { CarsRequest } from "../@types/interfaces";
import { MyCars } from "../screens/MyCars";

type StackRoutesList = {
  Home: undefined;
  CarDetails: {
    carDetails: CarsRequest;
  };
  Schedulle: {
    carDetails: CarsRequest;
    dates: string;
  };
  SchedullingDetails: {
    carDetails: CarsRequest;
    dates: string[];
  };
  SchedullingComplete: undefined;
  MyCars: undefined;
};

const Stack = createNativeStackNavigator<StackRoutesList>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="Schedulle" component={Schedulle} />
      <Stack.Screen name="SchedullingDetails" component={SchedullingDetails} />
      <Stack.Screen
        name="SchedullingComplete"
        component={SchedullingComplete}
      />
      <Stack.Screen name="MyCars" component={MyCars} />
    </Stack.Navigator>
  );
}
