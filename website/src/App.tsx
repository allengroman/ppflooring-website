import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarComponent } from "@/components/navbar";
import { FooterComponent } from "@/components/footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Gallery from "./Gallery";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Router>
        <NavbarComponent />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <FooterComponent />
      </Router>
    </div>
  );
}
