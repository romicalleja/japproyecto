var mail = document.getElementById("floatingInput");
var pass = document.getElementById("floatingPassword");
const redirect = document.getElementById("signin");

function validateForm() {
  let form = document.forms["reg"]["reg"];
  if (form == "") {
    alert("Complete la informacion");
    return false;
  }
  else{
    localStorage.setItem("mail", mail.value)
    return true;
  }
  }




addEventListener("submit", () => {
  event.preventDefault()
  if (validateForm()==true){
       location.href="inicial.html";
  } 
  else{
 return alert("Verifique informacion");
  }
});


function onSignIn(googleUser) {
  event.preventDefault()
  window.location="inicial.html";
  var profile = googleUser.getBasicProfile();
  localStorage.setItem("mail", profile.getEmail)
  console.log(googleUser.getBasicProfile())
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

}
onSignIn(googleUser)

