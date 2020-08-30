document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded!");

  $("#spotify").on("click", () => {
    console.log("Spotify");

    $.ajax({
      url: "https://api.spotify.com/v1/me/player/recently-played",
      type: "GET",
      headers: {
        Authorization:
          "Bearer BQCL36r6-hUsub-TXoHXi7a3ycfQWetILpdErtLdCcxiZD3hfOa4HJD_EP2ZshPhqzac0DKid2wsvHb8SWYDpR5G82OIFyocmW6LtGITRYv-aPch9kvfBUElvI-oFzOpyfpHk6Cft5YO-KVVgN7w3dDIKuIMgXGlp4j-idql_vdyLTvmbi5fWAMAmMc",
      },

      success: (response) => {
        console.log(response);
      },

      error: (err) => {
        console.log(JSON.stringify(err));
      },
    });
  });

  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    console.log("Submit!");

    let csrf = $("input[name=csrfmiddlewaretoken]").val();
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
        csrfmiddlewaretoken: csrf,
      },

      success: function (response) {
        console.log(response);
        if (response.type === "success") {
          document.getElementById(
            "contactForm"
          ).innerHTML = `<h3 class="alert-success">${response.message}</h3>`;
        } else {
          divArr = document.querySelectorAll("div");
          divArr.forEach((element) => {
            if (element.id === "messages") {
              console.log("found!");

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
  });
});
