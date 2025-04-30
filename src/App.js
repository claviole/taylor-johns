import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Feed from "./pages/Feed/Feed";
import Music from "./pages/Music/Music";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/music" element={<Music />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
