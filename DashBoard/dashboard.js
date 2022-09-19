function logOut() {
  let names = window.localStorage.removeItem("input_values"); 
  window.location.replace("../index.html");
}