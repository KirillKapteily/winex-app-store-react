import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/body.scss";
import Layout from "./layout/Layout";
import LayoutApp from "./layout/LayoutApp";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AppDetails from "./pages/AppDetails";
import Search from "./pages/Search";
import Settings from "./pages/Settings";

function App() {
  const [os, setOs] = useState(localStorage.getItem("os") ||"windows");
  const [transparency, setTransparency] = useState(
    localStorage.getItem("transparency") || "transparent",
  );

  useEffect(() => {
    localStorage.setItem("transparency", transparency);
    document.body.setAttribute("data-theme", transparency);
  }, [transparency]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/apps" element={<Home os={os} setOs={setOs} />} />
          <Route path="/search" element={<Search os={os} setOs={setOs}/>} />
          <Route
            path="/settings"
            element={
              <Settings
                transparency={transparency}
                setTransparency={setTransparency}
              />
            }
          />

          <Route path="/apps/:id" element={<AppDetails os={os} />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
