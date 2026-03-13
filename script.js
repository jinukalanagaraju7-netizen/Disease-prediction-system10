window.onload=function(){

setTimeout(function(){

document.getElementById("doors").classList.add("open");

},1000);

}

function register(){

var user=document.getElementById("newuser").value;
var pass=document.getElementById("newpass").value;

if(user=="" || pass==""){
alert("Please enter username and password");
return;
}

localStorage.setItem("username",user);
localStorage.setItem("password",pass);

alert("Account Created Successfully");

// direct dashboard open
window.location="dashboard.html";

}

function login(){

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;

var savedUser=localStorage.getItem("username");
var savedPass=localStorage.getItem("password");

if(user===savedUser && pass===savedPass){

window.location="dashboard.html";

}
else{

alert("Wrong Username or Password");

}

}
