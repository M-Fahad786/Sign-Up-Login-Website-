let input_values = [];

let userName = document.getElementById("user-name");
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");
let userConfirm = document.getElementById("confirm-pass");
let userNumber = document.getElementById("number");
let userGender = document.getElementById("option-list");
let userDob = document.getElementById("dob");
let userCode = document.getElementById("postal-code");
let userAddress = document.getElementById("address");
let profile = document.getElementById("pic");

function Input(
  name,
  email,
  password,
  confirmPass,
  phoneNum,
  gender,
  postalCode,
  address,
  pic
) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.confirmPass = confirmPass;
  this.phoneNum = phoneNum;
  this.gender = gender;
  this.postalCode = postalCode;
  this.address = address;
  this.Pic = pic;
}

function onLogin() {
  if (
    userName.value === "" ||
    userEmail.value === "" ||
    userPassword.value === "" ||
    userConfirm.value === "" ||
    userGender.value === "" ||
    userDob.value === "" ||
    userCode.value === "" ||
    userAddress.value === "" ||
    profile.value === ""
  ) {
    alert("Please Fill Out All Fields");
  } else {
    let values = new Input(
      userName.value,
      userEmail.value,
      userPassword.value,
      userConfirm.value,
      userGender.value,
      userDob.value,
      userCode.value,
      userAddress.value,
      profile.value
    );
    input_values.push(values);
    let inp = JSON.stringify(input_values);
    window.localStorage.setItem("input_values", inp);
    // console.log(input_values);
    let container = document.getElementById("container");
    let sec_container = document.getElementById("sec-container");
    container.style.display = "none";
    sec_container.style.display = "flex";
    container.style.display = "none";
  }
}

let user_value = document.getElementById("user-value");
let email_value = document.getElementById("email-value");
let pass_value = document.getElementById("pass-value");
let conf_value = document.getElementById("conf-value");
function signIn() {
  let storage = window.localStorage.getItem("input_values");
  console.log(storage)
  let items = JSON.parse(window.localStorage.getItem("input_values"));
  for (let key in items) {
    if (
      userName.value !== items[key].user_value &&
      userEmail.value !== items[key].email_value &&
      userPassword.value !== items[key].pass_value &&
      userConfirm.value !== items[key].conf_value
    ) {
      alert("Data Is Incorrect");
      // break;
    } else {
      let main_container = document.getElementById("sec-container");
      let dashBoard = document.getElementById("dash-board");
      main_container.style.display = "none";
      dashBoard.style.display = "flex";
    }
  }
}
