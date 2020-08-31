import React from "react";
import "./App.css";

import ContactForm from "./components/contactForm/ContactForm";
import Slider from "./components/carousel/Slider";

function App() {
  return (
    <div className="App">
      <Slider />
      <ContactForm />
    </div>
  );
}

export default App;
