
const span = document.getElementsByClassName('span');
const rec = document.getElementsByClassName('rectangle')
console.log(rec);

for (let i = 0; i< span.length; i++) {
 rec[i].addEventListener('mouseover', () => {
   rec[i].classList.add('shadow');
 })

 rec[i].addEventListener('mouseout', () => {
   rec[i].classList.remove('shadow');
 })

}
