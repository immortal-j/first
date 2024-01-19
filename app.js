import React from "react";
import ReactDOM from "react-dom/client";
let parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", { id: "child" }, "I am a child")
);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
