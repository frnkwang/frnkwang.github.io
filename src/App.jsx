// import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import BlogPage from "./pages/Blog.jsx";
import CodePage from "./pages/Code.jsx";
import JournalPage from "./pages/Journal.jsx";
import MusicPage from "./pages/Music.jsx";

const pages = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "About",
    path: "/about",
    component: AboutPage,
  },
  {
    name: "Blog",
    path: "/blog",
    component: BlogPage,
  },
  {
    name: "Code",
    path: "/code",
    component: CodePage,
  },
  {
    name: "Music",
    path: "/music",
    component: MusicPage,
  },
  {
    name: "Journal",
    path: "/journal",
    component: JournalPage,
  },
];

function getRoute(name, path, component) {
  return <Route key={name} path={path} element={component()} />;
}

function App() {
  return (
    <div>
      <Header pages={pages} />
      <Routes>
        {pages.map((page) => getRoute(page.name, page.path, page.component))}
      </Routes>
    </div>
  );
}

export default App;
