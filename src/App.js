import "./App.css";
import Body from "./components/Body";
import { store } from "../src/redux/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
