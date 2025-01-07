import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "src/screens/homeScreen/HomeScreen";
import Login from "src/screens/loginScreen/LoginScreen";
import { NavigationProps, RootStackParamList } from "src/types/NavigationTypes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = (props: NavigationProps) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
