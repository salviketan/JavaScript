let mypasswd = document.querySelector("#inputPassword");
mypasswd.addEventListener("keyup",function (){checkPasswd(mypasswd.value)});
// console.log(mypasswd);

function checkPasswd(password){
  let barValue = document.querySelector("#bar-strength");
  let barColor = document.querySelector("#bar-strength");

  if(password.length >= 1){
    console.log(password);
    // let barValue = document.querySelector("#bar-strength");
    // let barColor = document.querySelector("#bar-strength");
    let strength = 0;
    // console.log(barValue);
    // console.log(barColor);
    // console.log(barColor.classList);
    alphaChar = false;
    digitChar = false;
    specialChar = false;
    passwordLength = false;

    if(password.match(/[a-z][a-z][a-z]+/)){
      strength ++;
      alphaChar = true;
      // console.log(strength);
    }
    if(password.match(/[0-9][0-9]+/)){
      strength ++;
      digitChar = true;
      // console.log(strength);
    }
    if(password.match(/[!@#$%^&*<>?]+/)){
      strength ++;
      specialChar = true;
      // console.log(strength);
    }
    if(password.match(/[A-Z]+/)){
      strength ++;
      // console.log(strength);
    }
    if(password.length > 7){
      strength ++;
      passwordLength = true;
      // console.log(strength);
    }
    if(strength === 0){
        barValue.style.cssText = "width: 3%";
        barColor.classList.remove(barColor.classList[1]);
        barColor.classList.add("bg-danger");
        document.getElementById("bar-status").innerHTML = "Weak";
        }
    if(strength === 1){
        barValue.style.cssText = "width: 20%;";
        barColor.classList.remove(barColor.classList[1]);
        barColor.classList.add("bg-danger");
        }
    if(strength === 2){
        barValue.style.cssText = "width: 40%";
        barColor.classList.remove(barColor.classList[1]);
        // console.log(barColor.classList);
        barColor.classList.add("bg-warning");
        // console.log(barColor.classList);
        document.getElementById("bar-status").innerHTML = "Comman";
        }
    if(strength === 3){
        barValue.style.cssText = "width: 60%";
        barColor.classList.remove(barColor.classList[1]);
        barColor.classList.add("bg-info");
        document.getElementById("bar-status").innerHTML = "Good";
        }
    if(strength === 4){
        barValue.style.cssText = "width: 80%;";
        barColor.classList.remove(barColor.classList[1]);
        document.getElementById("bar-status").innerHTML = "Better";
        }
    if(strength === 5){
        barValue.style.cssText = "width: 100%;"
        barColor.classList.remove(barColor.classList[1]);
        barColor.classList.add("bg-success");
        document.getElementById("bar-status").innerHTML = "Strong";
       };


    if(alphaChar && digitChar && specialChar && passwordLength){
      passwordString = document.querySelector("#password-check");
      passwordString.addEventListener('click',toDoPage);
      console.log(passwordString);

      function toDoPage(){
        let valid = document.querySelector("#signin-form");
        valid.action = "to_do.html";
      }

    }
    
  }else {
    barValue.style.cssText = "width: 0%";
    barColor.classList.remove(barColor.classList[1]);
    document.getElementById("bar-status").innerHTML = "";
  }

}
