document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded!");
  const found = document.querySelector("h1");
  found.addEventListener("click", () => {
    console.log("Clicked!");
  });
});
