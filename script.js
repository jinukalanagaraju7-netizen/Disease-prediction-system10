let savedUser="";
let savedPass="";

function createAccount(){

savedUser=document.getElementById("newUser").value;
savedPass=document.getElementById("newPass").value;

document.getElementById("msg").innerHTML="Account Created Successfully";

}

function login(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u==savedUser && p==savedPass){

document.querySelector(".login-box").style.display="none";
document.getElementById("mainPage").style.display="block";

}else{

document.getElementById("msg").innerHTML="Wrong Username or Password";

}

}



function predictDisease(){

let symptoms=[];

document.querySelectorAll("input[type=checkbox]:checked").forEach((item)=>{
symptoms.push(item.value);
});


let diseases=[

{
name:"Flu",
symptoms:["Fever","Cough","Headache","Body Pain"],
medicine:"Paracetamol"
},

{
name:"Common Cold",
symptoms:["Cold","Sneezing","Runny Nose","Cough"],
medicine:"Antihistamine"
},

{
name:"Food Poisoning",
symptoms:["Vomiting","Stomach Pain","Diarrhea"],
medicine:"ORS"
},

{
name:"Dengue",
symptoms:["High Fever","Joint Pain","Skin Rash"],
medicine:"Doctor Consultation"
}

];


let output="";

diseases.forEach(d=>{

let match=d.symptoms.filter(s=>symptoms.includes(s)).length;

if(match>=2){

output+=`

<div class="card">

<h3>${d.name}</h3>

<p>Medicine: ${d.medicine}</p>

</div>

`;

}

});

if(output==""){
output="<h3>No disease detected</h3>";
}

document.getElementById("results").innerHTML=output;

}
