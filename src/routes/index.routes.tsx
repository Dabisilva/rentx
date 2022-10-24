import { NavigationContainer } from "@react-navigation/native";
import { CarsRequest } from "../@types/interfaces";
import { StackRoutes } from "./stack.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CarDetails: {
        carDetails: CarsRequest;
      };
      Schedulle: {
        carDetails: CarsRequest;
      };
      SchedullingDetails: {
        carDetails: CarsRequest;
        dates: string[];
      };
      SchedullingComplete: undefined;
      MyCars: undefined;
    }
  }
}

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
