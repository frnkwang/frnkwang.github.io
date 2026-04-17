// import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import { ALL_PAGES } from "./util/PageFinder.js";

import styles from "./App.module.css";

function getRoute(urlPath, module) {
  return <Route key={urlPath} path={urlPath} element={module.default()} />;
}

function App() {
  return (
    <div className={styles.app}>
      <div style={{ width: "100%" }}>
        <Header />
        <Routes>
          {ALL_PAGES.map((page) => getRoute(page.urlPath, page.module))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
