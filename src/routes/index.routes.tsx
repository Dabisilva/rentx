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
      Schedulle: undefined;
      SchedullingDetails: undefined;
      SchedullingComplete: undefined;
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
