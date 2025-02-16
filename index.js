// const heading = React.createElement(
//   "h1",
//   { className: "greetings" },
//   React.createElement("div", {}, "Have a Nice Day"),
//   React.createElement("div", {}, "second Element")
// );

// console.log(heading);
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
