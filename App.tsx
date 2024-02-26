import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
