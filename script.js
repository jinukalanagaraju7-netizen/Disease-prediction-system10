function login(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u=="admin" && p=="1234"){

document.getElementById("loginPage").classList.add("open");

setTimeout(()=>{
document.getElementById("loginPage").style.display="none";
document.getElementById("mainPage").style.display="block";
},1000);

}
else{

document.getElementById("loginMsg").innerHTML="Invalid Login";

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
symptoms:["Cold","Cough","Sneezing","Runny Nose"],
medicine:"Antihistamine"
},

{
name:"Food Poisoning",
symptoms:["Vomiting","Stomach Pain","Diarrhea"],
medicine:"ORS"
},

{
name:"Malaria",
symptoms:["Fever","Sweating","Chills"],
medicine:"Antimalarial"
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
