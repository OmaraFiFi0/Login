let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let nameInput = document.getElementById("name");
let signUpEmail = document.getElementById("signUpEmail");
let signUpPassword = document.getElementById("signUppassword");
let btnSignUp = document.getElementById("sign-up-botton");
let btnLogin = document.getElementById("btn-Login");
let btnlogout = document.getElementById("logout");
let form = document.querySelector("form");

let accountList;
if (localStorage.getItem("Accounts") == null) {
  accountList = [];
} else {
  accountList = JSON.parse(localStorage.getItem("Accounts"));
}
function addAccount() {
  if (
    nameInput.classList.contains("is-valid") &&
    signUpEmail.classList.contains("is-valid") &&
    signUpPassword.classList.contains("is-valid")
  ) {
    var email = {
      name: nameInput.value,
      signUpEmail: signUpEmail.value,
      signUpPassword: signUpPassword.value,
    };

    accountList.push(email);
    localStorage.setItem("Accounts", JSON.stringify(accountList));

    console.log(accountList);
  } else {
    alert("Data Not Valid");
  }
}

if (btnSignUp) {
  btnSignUp.addEventListener("click", function () {
    addAccount();
  });
} else {
  console.log("Button SignUP Not In This PAge ");
}

function clear() {
  nameInput.value = null;
  signUpEmail.value = null;
  signUpPassword.value = null;
}

function Login() {
  var loginEmail = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(loginEmail);
}

if (btnLogin) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
  btnLogin.addEventListener("click", function () {
    let IsChecked = false;
    for (var i = 0; i < accountList.length; i++) {
      console.log(accountList[i].signUpEmail, accountList[i].signUpPassword);
      if (
        accountList[i].signUpEmail == email.value &&
        accountList[i].signUpPassword == password.value
      ) {
        IsChecked = true;
        localStorage.setItem("LoginAccount", JSON.stringify(accountList[i]));
        window.open("Welcome-page.html", "_self");
        break;
      }
    }
    if (!IsChecked) {
      alert("Account Wrong");
    }
    return IsChecked;
  });
} else {
  console.log("Button Login not found.");
}

function display() {
  var cartona = "";
  var LoginAccount = JSON.parse(localStorage.getItem("LoginAccount"));
  if (LoginAccount) {
    cartona += `<div class="col-md-12">
              <div
                class="welcomed  d-flex justify-content-center align-items-center shadow-lg"
              >
                <h2 class="fs-1 text-capitalize text-white mt-4">Welcome ${LoginAccount.name}</h2>
              </div>
            </div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}
display();

if (btnlogout) {
  btnlogout.addEventListener("click", function () {
    window.open("index.html", "_self");
  });
}

// Fireworks animation function
function showFireworks() {
  const fireworksContainer = document.getElementById("fireworks-container");
  fireworksContainer.style.display = "block"; // Show fireworks container

  // Generate fireworks
  for (let i = 0; i < 50; i++) {
    const firework = document.createElement("div");
    firework.classList.add("firework");

    // Randomize firework positions
    firework.style.left = `${Math.random() * window.innerWidth}px`;
    firework.style.top = `${Math.random() * window.innerHeight}px`;

    // Append to fireworks container
    fireworksContainer.appendChild(firework);

    // Remove firework after animation ends
    setTimeout(() => {
      firework.remove();
    }, 2000);
  }
}

// Call the fireworks function after the page loads
window.onload = function () {
  // Trigger fireworks animation after page load

  showFireworks();
};

function validationInputs(element) {
  var RegexRule = {
    email: /^[A-Z][a-z]{2,10}@(gmail.com|yahoo.com)$/,
    password: /[A-Za-z0-9\d@#$%^&*!]{8,20}/,
    name: /^[A-Za-z]{1,9}$/i,
    signUpEmail: /^[A-Z][a-z]{2,10}@(gmail.com|yahoo.com)$/,
    signUppassword: /^[A-Za-z0-9\d@#$%^&*!]{8,20}$/,
  };
  RegexRule[element.id].test(element.value);
  if (RegexRule[element.id].test(element.value) == true) {
    console.log("match");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
  } else {
    console.log("notMatch");
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    element.nextElementSibling.classList.remove("d-none");
  }
}
