import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "Hi I am H1 Tag"),
    React.createElement("h2", { key: "h2" }, "Hi I am H2 Tag"),
  ])
);

root.render(parent);
