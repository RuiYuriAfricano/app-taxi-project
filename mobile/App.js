import { StatusBar } from "expo-status-bar";
import { RootRouter } from "./src/routes";
import { AppProvider } from "./src/context/app";
import { KeyboardAvoidingView } from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <AppProvider>
        <RootRouter />
        <StatusBar style="auto" />
      </AppProvider>
    </KeyboardAvoidingView>
  );
}
