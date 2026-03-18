function login(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u=="admin" && p=="1234"){

document.getElementById("loginPage").style.display="none";
document.getElementById("mainPage").style.display="block";

}
else{

document.getElementById("loginMsg").innerHTML="Invalid Login";

}

}



function logout(){

document.getElementById("loginPage").style.display="block";
document.getElementById("mainPage").style.display="none";

}



function predictDisease(){

let symptoms=[];

document.querySelectorAll("input[type=checkbox]:checked").forEach((item)=>{
symptoms.push(item.value);
});

let diseases=[

{
name:"Flu",
symptoms:["Fever","Cough","Body Pain","Headache"],
medicine:"Paracetamol"
},

{
name:"Common Cold",
symptoms:["Cold","Sneezing","Runny Nose","Cough"],
medicine:"Antihistamine"
},

{
name:"Malaria",
symptoms:["Fever","Sweating","Chills","Headache"],
medicine:"Antimalarial drugs"
},

{
name:"Food Poisoning",
symptoms:["Vomiting","Stomach Pain","Diarrhea","Nausea"],
medicine:"ORS"
},

{
name:"Covid-19",
symptoms:["Dry Cough","Fever","Loss Taste","Loss Smell"],
medicine:"Isolation + Paracetamol"
},

{
name:"Dengue",
symptoms:["High Fever","Joint Pain","Skin Rash","Headache"],
medicine:"Doctor consultation"
}

];

let output="";

diseases.forEach(d=>{

let match=d.symptoms.filter(s=>symptoms.includes(s)).length;

if(match>=2){

let percent=Math.floor((match/d.symptoms.length)*100);

output+=`

<div class="card">

<h3>${d.name}</h3>

<p>Probability: ${percent}%</p>

<p>Medicine: ${d.medicine}</p>

</div>

`;

}

});

if(output==""){

output="<h3>No Disease Detected</h3>";

}

document.getElementById("results").innerHTML=output;

}
