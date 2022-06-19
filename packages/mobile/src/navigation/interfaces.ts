import type {ParamListBase, RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NavigationScreenProps<
  S extends ParamListBase,
  T extends keyof S,
> = {
  navigation: NativeStackNavigationProp<S, T>;
  route: RouteProp<S, T>;
};
