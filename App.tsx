import React from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import NewStack from "./src/Router/Stack/NewStack";
import { Provider } from "react-redux";
import { store } from "./src/Store/luutru";


const App = () => {
  return(
    <Provider store={store} >
    <View style={{flex: 1}}>
      <NewStack />
    </View>
    </Provider>
  )
}
export default App;