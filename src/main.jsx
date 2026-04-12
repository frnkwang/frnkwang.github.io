import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// routing
import { HashRouter } from "react-router-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// style overrides
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
