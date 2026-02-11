import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Memories from "./pages/Memories";
import Reasons from "./pages/Reasons";
import Valentine from "./pages/Valentine";
import Yes from "./pages/Yes";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/valentine" element={<Valentine />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </HashRouter>
  );
}
