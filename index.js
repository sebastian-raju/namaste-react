import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// jsx is transpiled by babel to react element => react element gets converted to html element after root.render
const jsxHeading = <h1>This is namaste react !!!</h1>;

console.log(jsxHeading);

const newHeading = <div>React Element</div>;

const NewFunctionalComponent = () => {
  return <div>New Functional Component</div>;
};

const HeadingComponent = () => {
  return (
    <div>
      {newHeading}

      {NewFunctionalComponent()}
      <NewFunctionalComponent></NewFunctionalComponent>
      <NewFunctionalComponent />
      <div>Hello world</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
