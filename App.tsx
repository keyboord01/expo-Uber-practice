import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import EatsPage from "./pages/EatsPage";
import SignUpPage from "./components/SignUpPage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <stack.Navigator>
              {/* <stack.Screen
                name="SignUpPage"
                component={SignUpPage}
                options={{ headerShown: false }}
              /> */}

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
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
