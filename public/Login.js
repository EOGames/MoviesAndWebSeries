let user = document.getElementById('user');
let pass = document.getElementById('pass');
let btn_submit = document.getElementById('btn_submit');
// btn_submit.addEventListener('onclick',Login);

function Login()
{
    console.log("User = " +user.value);
    console.log("pass = " +pass.value);

    if (user.value ==="admin" && pass.value === "1234")
    {
        console.log("Logged In Successfully");
        ShowData();
    }else
    {
        console.log("User Or Password Inccorect");
    }  
    
}

function ShowData()
{
    let _data = require("./src/database.js");

    console.log(_data);
   // open('data.html');
    
}