// import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header.jsx";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import BlogPage from "./pages/Blog.jsx";
import CodePage from "./pages/Code.jsx";
import MusicPage from "./pages/Music.jsx";
import ReadingPage from "./pages/Reading.jsx";
import JournalPage from "./pages/Journal.jsx";
import { SECTION_PAGES, findRecentPages } from "./util/PageFinder.js";

const APP_MAX_WIDTH = "900px";

function getRoute(urlPath, module) {
  return <Route key={urlPath} path={urlPath} element={module.default()} />;
}

function App() {
  const singlePages = findRecentPages("/src/pages", null);
  return (
    <Container style={{ maxWidth: APP_MAX_WIDTH }}>
      <Header />
      <Routes>
        {SECTION_PAGES.map((page) => getRoute(page.urlPath, page.module))}
        {singlePages.map((page) => getRoute(page.urlPath, page.module))}
      </Routes>
    </Container>
  );
}

export default App;
