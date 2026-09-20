import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// routing
import { HashRouter } from "react-router-dom";

// style overrides
import "./index.css";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </StrictMode>,
);
