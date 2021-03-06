

//  Navbar mouseover events
const index=document.getElementById("index");
const educacion=document.getElementById("educacion");
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

const moreBtn=document.getElementById("aprende");
moreBtn.addEventListener("mouseover",addDark);
moreBtn.addEventListener("mouseout",removeDark);

function addDark(){
  moreBtn.classList.add("dark")
}

function removeDark(){
  moreBtn.classList.remove("dark");
}

//  updated js


const cogPentagon = document.getElementById('cog');

cogPentagon.addEventListener('mouseover', () => {
  cogPentagon.classList.add('shadowBox');
})

 cogPentagon.addEventListener('mouseout', () => {
  cogPentagon.classList.remove('shadowBox');
 })

  const boltPentagon = document.getElementById('bolt');
boltPentagon.addEventListener('mouseover', () => {
 boltPentagon.classList.add('shadowBox');
  });
   boltPentagon.addEventListener('mouseout', () => {
 boltPentagon.classList.remove('shadowBox');
 })

  const starPentagon = document.getElementById('star');
starPentagon.addEventListener('mouseover', () => {
  starPentagon.classList.add('shadowBox');
  });
  starPentagon.addEventListener('mouseout', () => {
 starPentagon.classList.remove('shadowBox');
 })
