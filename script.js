let firstSubmit = true;

let form=document.getElementById("form");
let part2=document.getElementById("part2");
let captchaInput=document.getElementById("captcha");

form.onsubmit=function(e) {
    e.preventDefault(); // stop page reload

    if (firstSubmit){
        part2.style.display="block";
        firstSubmit=false;
    }else{
        if(captchaInput.value==="1234") {
            alert("Submitted successfully");
        }else{
            alert("Invalid captcha");
        }
    }
};
