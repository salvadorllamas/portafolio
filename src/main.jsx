import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Aquí incluye el override de event listeners
const addEventListenerOrig = EventTarget.prototype.addEventListener;

EventTarget.prototype.addEventListener = function (type, listener, options) {
  const newOptions = options || {};
  if (typeof newOptions === "object") {
    if (type === "touchstart" || type === "touchmove" || type === "wheel") {
      newOptions.passive = true;
    }
  }
  addEventListenerOrig.call(this, type, listener, newOptions);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
