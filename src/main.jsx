import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// routing
import { BrowserRouter } from "react-router-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
