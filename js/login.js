var mail = document.getElementById("floatingInput");
var pass = document.getElementById("floatingPassword");
const redirect = document.getElementById("signin");

function validateForm() {
  if (validatemail()==false) {
    return alert("Verifique informacion");
  } else if (validatepass()==false) {
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

function validatemail(){
  if (mail.value.length >= 1){
    return true}
    else{
    return false
  }
  }
  function validatepass(){
    if (pass.value.length >= 1){
      return true}
      else{
      return false
    }
    }