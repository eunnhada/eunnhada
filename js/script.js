document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (!menuToggle || !mainNav) {
    console.log("menuToggle 또는 mainNav를 찾지 못함");
    return;
  }

  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");
    console.log("menu clicked");
  });
});