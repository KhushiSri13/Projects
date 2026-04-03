function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("hidden");
}

window.addEventListener("click", function(e) {
  const avatar = document.querySelector(".cursor-pointer");
  const menu = document.getElementById("dropdownMenu");

  if (avatar && !avatar.contains(e.target)) {
    menu.classList.add("hidden");
  }
});