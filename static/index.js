document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded!");
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
      async: true,

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

      error: function (xhr, errmsg, err) {
        $("#results").html(
          "<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " +
            errmsg +
            " <a href='#' class='close'>&times;</a></div>"
        );
        console.log(xhr.status + ": " + xhr.responseText);
      },
    });
  });
});
