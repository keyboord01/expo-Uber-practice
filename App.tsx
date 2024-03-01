import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import EatsPage from "./pages/EatsPage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <stack.Navigator>
            <stack.Screen
              name="HomePage"
              component={HomePage}
              options={{
                headerShown: false,
              }}
            />
            <stack.Screen
              name="MapPage"
              component={MapPage}
              options={{
                headerShown: false,
              }}
            />
            <stack.Screen
              name="EatsPage"
              component={EatsPage}
              options={{
                headerShown: false,
              }}
            />
          </stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
