// import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header.jsx";
import { ALL_PAGES } from "./util/PageFinder.js";

const APP_MAX_WIDTH = "900px";

function getRoute(urlPath, module) {
  return <Route key={urlPath} path={urlPath} element={module.default()} />;
}

function App() {
  console.log(ALL_PAGES);
  return (
    <Container style={{ maxWidth: APP_MAX_WIDTH }}>
      <Header />
      <Routes>
        {ALL_PAGES.map((page) => getRoute(page.urlPath, page.module))}
      </Routes>
    </Container>
  );
}

export default App;
