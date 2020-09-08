import React, { Suspense, lazy } from "react";
import "./App.css";
import $ from "jquery";

import PacmanLoader from "react-spinners/PacmanLoader";
import Body from "./components/body/Body";
import Typing from "./components/typing/Typing";
import Footer from "./components/footer/Footer";
import Top from "./components/toTop/Top";
import Navbar from "./components/navbar/Navbar";

function App() {
  function loading() {
    $(window).on("load", () => {
      $(".loading-screen").fadeOut("fast");
      document.getElementById("app").style.display = "block";
    });
  }

  const Contacts = lazy(() => import("./components/contactForm/ContactForm"));

  return (
    <React.Fragment>
      <div class="full" onLoadStart={loading()}>
        <div className="loading-screen">
          <PacmanLoader size={45} color="#61dafb" />
        </div>
        <div className="App" id="app">
          <Typing />
          <Navbar />
          <Body />
          <Suspense fallback={<div>Loading....</div>}>
            <Contacts />
          </Suspense>
          <Top />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
