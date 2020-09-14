import React, { Suspense, lazy } from "react";
import "./App.css";
import $ from "jquery";
import PacmanLoader from "react-spinners/PacmanLoader";
import ReactNotification, { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

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

      store.addNotification({
        title: "Notification!",
        message:
          "This website is still in progress.\nThank you for visiting!!! 🥇",
        type: "info",
        container: "top-right",
        insert: "top",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],

        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });
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
          <ReactNotification />
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
