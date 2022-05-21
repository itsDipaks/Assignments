var savedata=JSON.parse(localStorage.getItem("Persondata"))

document.querySelector("#form2").addEventListener("submit",loginfunction)
function loginfunction(){
      event.preventDefault()
      logindataobject={
            email2:form2.em1.value,
            pass2:form2.pass1.value
      }
      
      if(savedata==null)
      {
            alert("Please Create Account")
      }
      else if(savedata.email==logindataobject.email2 && savedata.pass==logindataobject.pass2)
      {
            alert("Login Sucessful")
           window.location.href="index.html"
           localStorage.setItem("logindata",JSON.stringify(logindataobject))
      }
      else if(savedata.email!=logindataobject.email2 ){
            alert("Enter right Email")
      }
      else if(savedata.pass!=logindataobject.pass2){
            alert("Enter right passward")
      }
      
      
      

}