window.onload=function(){

setTimeout(function(){

document.getElementById("doors").classList.add("open");

},1000);

}

function register(){

var user=document.getElementById("newuser").value;
var pass=document.getElementById("newpass").value;

localStorage.setItem("username",user);
localStorage.setItem("password",pass);

alert("Account Created");

}

function login(){

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;

var savedUser=localStorage.getItem("username");
var savedPass=localStorage.getItem("password");

if(user===savedUser && pass===savedPass){

window.location="dashboard.html";

}else{

alert("Wrong Username or Password");

}

}
