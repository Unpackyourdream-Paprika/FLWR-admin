import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/common/Layout";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인 페이지 - Layout 없음 */}
        <Route path="/login" element={<Login />} />

        {/* 메인 애플리케이션 - Layout 있음 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* / */}
          <Route path="home" element={<Home />} /> {/* /home */}
          <Route path="about" element={<About />} /> {/* /about */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
