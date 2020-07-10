const h1 = document.querySelector("h1");

let time = new Date();
let dag = time.getDate();
let maand =time.getMonth();
let jaar = time.getUTCFullYear();

h1.addEventListener("click", () => {
   h1.classList.add("move");
   h1.innerHTML = 
   `Start in de wereld van<br> HTML5, CSS3 & 
   Javascript<br>Op: ${dag}-${maand}-${jaar}`;
 });

