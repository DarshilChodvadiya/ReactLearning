import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

let variable = `sum of 6 and 7 is ${6+7}`

const ReactElement = React.createElement(
  'a',
  {
    href : "https://google.com",
    target : "_blank",
  },
  'click me to visit google',
  variable
)

ReactDOM.createRoot(document.getElementById("root")).render(
  // <App/>
  ReactElement
);
