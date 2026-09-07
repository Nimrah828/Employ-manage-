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
