// Degree icon mouseover events
const cog=document.getElementById("cog");
const bolt=document.getElementById("bolt");
const star=document.getElementById("star");

cog.addEventListener("mouseover",addShadow);
bolt.addEventListener("mouseover",addShadow2);
star.addEventListener("mouseover",addShadow3);
cog.addEventListener("mouseout",remove);
bolt.addEventListener("mouseout",remove2);
star.addEventListener("mouseout",remove3);

function addShadow(){
  cog.classList.add("shadowBox");
}
function addShadow2(){
  bolt.classList.add("shadowBox");
}
function addShadow3(){
  star.classList.add("shadowBox");
}
function remove(){
  cog.classList.remove("shadowBox");
}
function remove2(){
  bolt.classList.remove("shadowBox");
}
function remove3() {
  star.classList.remove("shadowBox");
}

//  Navbar mouseover events
const index=document.getElementById("index");
const educacion=document.getElementById("educacion");
console.log(educacion)
const nueva=document.getElementById("nueva");

index.addEventListener("mouseover",addBold);
educacion.addEventListener("mouseover",addBold2);
nueva.addEventListener("mouseover",addBold3);

index.addEventListener("mouseout",removeBold);
educacion.addEventListener("mouseout",removeBold2);
nueva.addEventListener("mouseout",removeBold3);

function addBold(){
  index.classList.add("boldGray");
}
function addBold2(){
  educacion.classList.add("boldGray");
}
function addBold3(){
  nueva.classList.add("boldGray");
}

function removeBold(){
  index.classList.remove("boldGray");
}
function removeBold2(){
  educacion.classList.remove("boldGray");
}
function removeBold3(){
  nueva.classList.remove("boldGray");
}

// action buttons mouseover events

const startBtn=document.getElementsByClassName("start");
console.log(startBtn);
