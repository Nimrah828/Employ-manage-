// ===============================
// SHOW LOGIN
// ===============================

function showLogin() {

    document.getElementById("login-form")
        .classList.remove("hidden");

    document.getElementById("signup-form")
        .classList.add("hidden");

    document.getElementById("login-tab")
        .classList.add("active");

    document.getElementById("signup-tab")
        .classList.remove("active");

    document.getElementById("form-title")
        .textContent = "Welcome Back";

    document.getElementById("form-subtitle")
        .textContent =
        "Login to your account and continue";
}


// ===============================
// SHOW SIGN UP
// ===============================

function showSignup() {

    document.getElementById("login-form")
        .classList.add("hidden");

    document.getElementById("signup-form")
        .classList.remove("hidden");

    document.getElementById("login-tab")
        .classList.remove("active");

    document.getElementById("signup-tab")
        .classList.add("active");

    document.getElementById("form-title")
        .textContent = "Create Account";

    document.getElementById("form-subtitle")
        .textContent =
        "Join us and start your journey";
}


// ===============================
// LOGIN
// ===============================

function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("login-email").value.trim();

    const password =
        document.getElementById("login-password").value.trim();


    // Check fields

    if (email === "" || password === "") {

        alert("Please enter email and password.");

        return;
    }


    // Login successful

    alert("Login successful!");

    // Open Dashboard

    window.location.href = "./dashboard.html";
}


// ===============================
// SIGN UP
// ===============================

function signupUser(event) {

    event.preventDefault();

    const name =
        document.getElementById("signup-name").value.trim();

    const email =
        document.getElementById("signup-email").value.trim();

    const password =
        document.getElementById("signup-password").value;

    const confirmPassword =
        document.getElementById("confirm-password").value;


    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    if (password === "") {

        alert("Please create a password.");

        return;
    }


    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }


    // Account created

    alert("Account created successfully!");


    // Open Dashboard

    window.location.href = "./dashboard.html";
}
