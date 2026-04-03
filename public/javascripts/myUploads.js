
function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.classList.toggle("hidden");
}

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const avatarCircle = document.querySelector(".w-9.h-9.rounded-full");
  
  if (!avatarCircle?.contains(event.target) && !dropdownMenu?.contains(event.target)) {
    dropdownMenu?.classList.add("hidden");
  }
});

const searchInput = document.getElementById("searchInput");
  const files = document.querySelectorAll(".file-item");

  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    files.forEach(file => {
      const name = file.getAttribute("data-name");

      if (name.includes(value)) {
        file.style.display = "flex";
      } else {
        file.style.display = "none";
      }
    });
  });
