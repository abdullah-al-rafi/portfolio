import React from "react";
import "./App.css";

import Body from "./components/body/Body";
import ContactForm from "./components/contactForm/ContactForm";
import Typing from "./components/typing/Typing";
import Footer from "./components/footer/Footer";
import Top from "./components/toTop/Top";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Typing />
      <Navbar />
      <Body />
      <ContactForm />
      <Top />
      <Footer />
    </div>
  );
}

export default App;
