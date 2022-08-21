var mail = document.getElementById("floatingInput");
var pass = document.getElementById("floatingPassword");
const redirect = document.getElementById("signin");

function validateForm() {
  if (mail.value.length = 0) {
    return alert("Verifique informacion");
  } else if (pass.value.length = 0) {
    return alert("Verifique informacion");
  } else {
    return true
  }
}

redirect.addEventListener("click", () => {
  if (validateForm()==true){
    location.href="inicial.html";
  } 
  else{
 return alert("Verifique informacion");
  }
});

