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

