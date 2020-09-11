// constants
const cog=document.getElementById("cog");
const bolt=document.getElementById("bolt");
const star=document.getElementById("star");

// event listeners
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


const index=document.getElementById("index");
console.log(index);

const educacion=document.getElementById("educacion");

const nueva=document.getElementById("nueva");
index.addEventListener("mouseover", addShadow);
educacion.addEventListener("mouseover", addShadow2);
nueva.addEventListener("mouseover", addShadow3);
index.addEventListener("mouseout", remove);
educacion.addEventListener("mouseout", remove2);
nueva.addEventListener("mouseout", remove3);
