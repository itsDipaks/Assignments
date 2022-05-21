document.querySelector("#form1").addEventListener("submit", savefunction);
function savefunction() {
  event.preventDefault();
  var dataobj = {
    name: form1.na.value,
    email: form1.em.value,
    number: form1.nu.value,
    pass: form1.pa.value,
  };
  localStorage.setItem("Persondata", JSON.stringify(dataobj));
  window.location.href = "login.html";
}
