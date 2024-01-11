import ReactDOM from "react-dom/client";
import "bulma/css/bulma.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
