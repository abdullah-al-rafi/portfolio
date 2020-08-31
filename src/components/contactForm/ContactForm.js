import React from "react";
import $ from "jquery";
import Cookies from "js-cookie";
import ReCAPTCHA from "react-google-recaptcha";

import PulseLoader from "react-spinners/PulseLoader";
import "./ContactForm.css";

function ContactForm() {
  let csrfToken = Cookies.get("csrftoken");

  function contactFormHandler(e) {
    e.preventDefault();
    console.log("clicked");

    $("#btn").hide();
    $(".ajaxProgress").show();
    $.ajax({
      url: "view",
      type: "POST",
      data: {
        fname: $("#fname").val(),
        email: $("#email").val(),
        textarea: $("#textarea").val(),
        recaptchaResponse: $("#g-recaptcha-response").val(),
        csrfmiddlewaretoken: csrfToken,
        credentials: "include",
      },

      success: function (response) {
        console.log(response);
        if (response.type === "success") {
          document.getElementById(
            "contactForm"
          ).innerHTML = `<h3 class="alert-success">${response.message}</h3>`;
        } else {
          let divArr = document.querySelectorAll("div");
          divArr.forEach((element) => {
            if (element.id === "messages") {
              // console.log("found!");

              try {
                document.querySelector("#dangerMessage").remove();
              } catch {}

              const messageElement = document.createElement("div");
              messageElement.id = "dangerMessage";
              messageElement.innerHTML = `<h3 class="alert-danger">${response.message}</h3>`;
              element.append(messageElement);
              $("#btn").show();
            }
          });
        }
        $(".ajaxProgress").hide();
      },

      error: function (err) {
        console.log(JSON.stringify(err));
        $(".ajaxProgress").hide();
        $("#btn").show();
      },
    });
  }

  return (
    <React.Fragment>
      <h1>👓 Welcome to my portfolio website! 🎨</h1>
      <div id="contact">
        <form onSubmit={contactFormHandler} id="contactForm">
          <div className="form-group">
            <h3>Contact Form</h3>
          </div>
          <div className="form-group" id="messages"></div>
          <div className="form-group">
            <input
              autofocus
              required
              className="form-control text-capitalize"
              type="text"
              id="fname"
              placeholder="Full Name*"
            />
          </div>
          <div className="form-group">
            <input
              required
              className="form-control"
              type="email"
              id="email"
              placeholder="Contact Email*"
            />
            <small id="emailHelp" className="form-text text-muted">
              Your email will never be shared with anyone else.
            </small>
          </div>
          <div className="form-group">
            <textarea
              required
              className="form-control"
              id="textarea"
              cols="10"
              rows="5"
              placeholder="Your Message*"
            ></textarea>
          </div>
          <small id="emailHelp" className="form-text text-muted">
            * fields are required!
          </small>
          <br />
          <div>
            <ReCAPTCHA
              id="g-recaptcha-response"
              sitekey="6LfFOsMZAAAAALybrOe2eqZeGTHN1pj2cLMwNKz6"
            />
          </div>
          <br />
          <div className="ajaxProgress">
            <PulseLoader size={15} color="#0C4B33" />
          </div>
          <br />
          <input type="submit" className="btn btn-primary" id="btn" />
        </form>
      </div>
    </React.Fragment>
  );
}

export default ContactForm;
