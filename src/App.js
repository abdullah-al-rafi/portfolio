import React from "react";
import "./App.css";

import ContactForm from "./components/contactForm/ContactForm";
import Slider from "./components/carousel/Slider";
import Footer from "./components/footer/Footer";
import Top from "./components/toTop/Top";

function App() {
  return (
    <div className="App">
      <Slider />
      <ContactForm />
      <Top />
      <Footer />
    </div>
  );
}

export default App;
