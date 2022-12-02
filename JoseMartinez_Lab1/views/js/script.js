function validate() {
    let error = true;
    console.log("validate");
   let username = document.forms["myForm"]["iusername"] ; 
   let email = document.forms["myForm"]["iemail"] ;
   let password = document.forms["myForm"]["ipassword"] ;

    
    //Validate User Name
    let rusername = document.getElementById('rusername')
    if (username.value == "") {
      rusername.innerHTML = "Invalid User Name";
      rusername.className = "incorrect show"
      username.focus()
      return false;
    } else {

      rusername.className = "hide"


    }
 
    //validate Email
    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let remail = document.getElementById('remail')
    if (email.value == "" || email == null || emailPattern.test(email.value) == false) {
      remail.innerHTML = "Invalid Email";
      remail.className = "incorrect show"
      email.focus()
      return false;
    } else {

      remail.className = "hide"

    }

    //validate password
    let rpassword = document.getElementById('rpassword')

    if (password.value == "" || password == null)

    {
      rpassword.innerHTML = "Invalid password";
      rpassword.className = "incorrect show"
      password.focus()
      return false;
    } else {
      if (password.value.length < 6 && password.value.length > 16) {
        rpassword.innerHTML = "Password must be at least 8 characters";
        rpassword.className = "incorrect show"
        password.focus()
        return false;
      } else {
      rpassword.className = "hide"
      
      }
    }

   

    //validate phone
    let phone = document.forms["myForm"]["iphone"] ;
    let rphone = document.getElementById('rphone')
    if (phone.value == "" || phone == null || phone.value.length != 10) {
      rphone.innerHTML = "Invalid Phone";
      rphone.className = "incorrect show"
      phone.focus()
      return false;
    } else {  
      rphone.className = "hide"

    }
     
    //if everithing is  ok 
    saveJsonToCookiefor15minutes();


  }


  function saveJsonToCookiefor15minutes() {
    let username = document.forms["myForm"]["iusername"] ;
    let email = document.forms["myForm"]["iemail"] ;
    let password = document.forms["myForm"]["ipassword"] ;

    passwordEncode=encodePassword(password.value);

    let phone = document.forms["myForm"]["iphone"] ;
    let user = {
      username: username.value,
      email: email.value,
      password: passwordEncode,
      phone: phone.value
    }
    password.value=passwordEncode;
    let userJson = JSON.stringify(user);
    let date = new Date();
    date.setTime(date.getTime() + (15 * 60 * 1000));
    document.cookie = "user=" + userJson + ";max-age=900";
  }

function redirect() {
  window.location.href = "http://www.conestogac.on.ca";
}
 
function validatePasswordLength(password) {
  if (password.length < 8 && password.length > 16) {
    return false;
  }
  return true;
}

 

function encodePassword(password) {
   
  return window.btoa(password);
}

function decodePassword(password) {
  return window.atob(password);
}


 
 
 