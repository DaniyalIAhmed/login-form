document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".toggleBtn").addEventListener("click", function () {
    let circle = document.querySelector(".circle");
    let div = document.querySelector(".toggleBtn");
    let login = document.querySelector(".login");

    if (circle.style.left === "2px" || circle.style.left === "") {
      circle.style.left = "27px";
      div.style.backgroundColor = "#888888";
      login.style.backdropFilter = "blur(10px)";
    } else {
      circle.style.left = "2px";
      div.style.backgroundColor = "#ffffff";
      login.style.backdropFilter = "none";
    }
  });
});
