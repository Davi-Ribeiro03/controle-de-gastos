import React from "react";
import Router from "./src/router/Router";

if (__DEV__) {
  require("./ReactotronConfig");
}

export default function App() {
  return <Router />;
}
