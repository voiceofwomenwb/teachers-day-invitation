const btn=document.getElementById("openBtn");
const envelope=document.querySelector(".envelope");

btn.onclick=function(){

envelope.classList.add("open");

btn.style.display="none";

}