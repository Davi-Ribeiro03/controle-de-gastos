import React from "react";
import Router from "./src/Router/Router";

if (__DEV__) {
  require("./ReactotronConfig");
}

export default function App() {
  return <Router />;
}
