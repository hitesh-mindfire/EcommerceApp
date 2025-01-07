import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/Store";
import { MainNavigator } from "./navigation";
const App = () => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <SafeAreaProvider>
          <MainNavigator />
        </SafeAreaProvider>
      </Provider>
    </PersistGate>
  );
};
export default App;
