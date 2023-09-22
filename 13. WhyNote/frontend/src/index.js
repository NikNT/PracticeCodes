import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NoteContextProvider } from "./global/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteContextProvider>
        <App />
      </NoteContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
