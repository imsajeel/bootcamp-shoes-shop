import React from "react";

import "./App.css";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import MyAppRoute from "./MyAppRoute";
import { CartProvider } from "./Components/CartContext";

const engine = new Styletron();

const Centered = styled("div", {
  position: "reletive",
  margin: "auto",
  with: "90%",
  maxWidth: "900px",
  // overflow: "hidden",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  // height: "100%",
});

function App() {
  return (
    <CartProvider>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Centered>
            <MyAppRoute />
          </Centered>
        </BaseProvider>
      </StyletronProvider>
    </CartProvider>
  );
}

export default App;
