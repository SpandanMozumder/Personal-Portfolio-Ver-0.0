import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Projects from "./screens/Projects";
import Resume from "./screens/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactme" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}
