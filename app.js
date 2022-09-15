let input_values = [];

let userName = document.getElementById("username");
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");
let userConfirm = document.getElementById("confirm-pass");
let userNumber = document.getElementById("number");
let userGender = document.getElementById("gender");
let userCode = document.getElementById("postal-code");
let userDob = document.getElementById("dob");
let profile = document.getElementById("pic");
let userAddress = document.getElementById("address");

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
    userName.value === "" 

    // userGender.value === "" ||
    // userDob.value === "" ||
    // userCode.value === "" ||
    // userAddress.value === "" ||
    // profile.value === ""
  ) {
    let user_para = document.getElementById("user-para");
   
    // let pass_para = document.getElementById("pass-para");
    // let confirm_para = document.getElementById("confirm-para");
    // let num_para = document.getElementById("num-para");
    // let gender_para = document.getElementById("gender-para");
    // let dob_para = document.getElementById("dob-para");
    // let postal_para = document.getElementById("postal-para");
    // let address_para = document.getElementById("address-para");
    // let pic_para = document.getElementById("pic-para");
    user_para.style.display = "block";
    userName.style.border = "1px solid red";
    if( userEmail.value === "" ){
      let email_para = document.getElementById("email-para");
      email_para.style.display = "block";
     userEmail.style.border = "1px solid red";
    }
    if(userPassword.value === ""){
      let pass_para = document.getElementById("pass-para");
      pass_para.style.display = "block";
      userPassword.style.border = "1px solid red";
    }
    if(userConfirm.value === "" ) {
      let confirm_para = document.getElementById("confirm-para");
      confirm_para.style.display = "block";
      userConfirm.style.border = "1px solid red";
    }
    if(userNumber.value === "" ) {
      let num_para = document.getElementById("num-para");
      num_para.style.display = "block";
      userNumber.style.border = "1px solid red";
    }
    if(userGender.value === "" ) {
      let gender_para = document.getElementById("gender-para");
      gender_para.style.display = "block";
      userGender.style.border = "1px solid red";
    }
    if(userCode.value === "" ) {
      let postal_para = document.getElementById("postal-para");
      postal_para.style.display = "block";
      userCode.style.border = "1px solid red";
    }
    if(userCode.value === "" ) {
      let postal_para = document.getElementById("postal-para");
      postal_para.style.display = "block";
      userCode.style.border = "1px solid red";
    }
    if(userDob.value === "" ) {
      let dob_para = document.getElementById("dob-para");
      dob_para.style.display = "block";
      userDob.style.border = "1px solid red";
    }
    if(profile.value === "" ) {
      let profile_para = document.getElementById("pic-para");
      profile_para.style.display = "block";
      profile.style.border = "1px solid red";
    }
    if(userAddress.value === "" ) {
      let address_para = document.getElementById("address-para");
      address_para.style.display = "block";
      userAddress.style.border = "1px solid red";
    }
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
    if (userPassword.value === userConfirm.value) {
      input_values.push(values);
      let inp = JSON.stringify(input_values);
      window.localStorage.setItem("input_values", inp);
      let container = document.getElementById("container");
      let sec_container = document.getElementById("sec-container");
      container.style.display = "none";
      sec_container.style.display = "flex";
      container.style.display = "none";
    } else {
      let not_match = document.getElementById("not-match");
      not_match.style.display = "block";
    }
  }
}

let user_value = document.getElementById("user-value");
let email_value = document.getElementById("email-value");
let pass_value = document.getElementById("pass-value");
let conf_value = document.getElementById("conf-value");
function signIn() {
  let storage = window.localStorage.getItem("input_values");

  let items = JSON.parse(storage);
  console.log(items[0]);

  for (let key in storage) {
    if (
      user_value.value !== items[0].name &&
      email_value.value !== items[0].email &&
      pass_value.value !== items[0].password &&
      conf_value.value !== items[0].confirmPass
    ) {
      alert("Data Is Incorrect");
      break;
    } else {
      let main_container = document.getElementById("sec-container");
      let dashBoard = document.getElementById("dash-board");
      main_container.style.display = "none";
      dashBoard.style.display = "flex";
    }
  }
}
function postalError() {
  let postal_error = document.getElementById("postal-num");
  if (userCode.value.length === 6) {
    postal_error.style.display = "none";
  } else {
    postal_error.style.display = "block";
  }
}

function onName() {
  let user_para = document.getElementById("user-para");
  let user_inp = document.getElementById("username")
  user_para.style.display = "none"
  user_inp.style.borderColor = "#aaa"
}
function onEmail() {
  let email_para = document.getElementById("email-para");
  let email_inp = document.getElementById("email")
  email_para.style.display = "none"
  email_inp.style.borderColor = "#aaa"
}
function onPassword() {
  let pass_para = document.getElementById("pass-para");
  let pass_inp = document.getElementById("password")
  pass_para.style.display = "none"
  pass_inp.style.borderColor = "#aaa"
}
function onConfirm() {
  let confirm_para = document.getElementById("confirm-para");
  let confirm_inp = document.getElementById("confirm-pass")
  confirm_para.style.display = "none"
  confirm_inp.style.borderColor = "#aaa"
}
function onNumber() {
  let num_para = document.getElementById("num-para");
  let num_inp = document.getElementById("number")
  num_para.style.display = "none"
 num_inp.style.borderColor = "#aaa"
}
function onGender() {
  let gender_para = document.getElementById("gender-para");
  let gender_inp = document.getElementById("gender")
  gender_para.style.display = "none"
  gender_inp.style.borderColor = "#aaa"
}
function onCode() {
  let code_para = document.getElementById("postal-para");
  let code_inp = document.getElementById("postal-code")
  code_para.style.display = "none"
  code_inp.style.borderColor = "#aaa"
}
function onBirth() {
  let dob_para = document.getElementById("dob-para");
  let dob_inp = document.getElementById("dob")
  dob_para.style.display = "none"
  dob_inp.style.borderColor = "#aaa"
}
function onPic() {
  let pic_para = document.getElementById("pic-para");
  let pic_inp = document.getElementById("pic")
  pic_para.style.display = "none"
  pic_inp.style.borderColor = "#aaa"
}
function onAddress() {
  let address_para = document.getElementById("address-para");
  let add_inp = document.getElementById("address")
  address_para.style.display = "none"
  add_inp.style.borderColor = "#aaa"
}

function NumLength() {
  let num_length = document.getElementById("num-length");
  if(userNumber.value.length === 11 ) {
    num_length.style.display = "none"
  }
  else{
    num_length.style.display = "block"
  }
}
function passLength() {
  let pass_length = document.getElementById("pass");
  if(userPassword.value.length > 8 ) {
    pass_length.style.display = "none"
  }
  else{
    pass_length.style.display = "block"
  }
}
function userLength() {
  let user_length = document.getElementById("email-length");
  if(userName.value.length >= 5) {
    user_length.style.display = "none"
  }
  else{
    user_length.style.display = "block"
  }
}
function addressLength() {
  let address_length = document.getElementById("address-length");
  if(userAddress.length > 25) {
    address_length.style.display = "none"
  }
  else{
    address_length.style.display = "block"
  }
}