// Dashboard loaded

console.log("Servodale Dashboard Loaded");


// ================================
// SIDEBAR ACTIVE ITEM
// ================================

const sideLinks =
    document.querySelectorAll(".side-nav .side-link");


sideLinks.forEach(link => {

    link.addEventListener("click", function () {

        sideLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ================================
// SEARCH
// ================================

const searchInput =
    document.querySelector(".search-box input");


searchInput.addEventListener("input", function () {

    console.log(
        "Searching:",
        this.value
    );

});

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
    document.body.classList.toggle("light", theme === "light");
    themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
    const newTheme =
        document.body.classList.contains("light")
            ? "dark"
            : "light";

    setTheme(newTheme);
});


