import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import PageContainer from "./components/PageContainer";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PageContainer />
      </div>
    </Provider>
  );
}

export default App;
