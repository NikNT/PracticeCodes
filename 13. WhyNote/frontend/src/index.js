import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NoteContextProvider } from "./global/Context";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteContextProvider>
        <App />
        <ToastContainer />
      </NoteContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
