const btnNo = document.getElementById("btnNo");
const btnYes = document.getElementById("btnYes");
btnNo.onmouseover = () => {
  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;

  let randomX = Math.floor(Math.random() * (innerWidth - 100));
  let randomY = Math.floor(Math.random() * (innerHeight - 60));
  console.log(`${randomX}px`);
  btnNo.style.left = randomX + "px";
  btnNo.style.top = randomY + "px";
};
btnYes.onclick = () => {
  document.getElementById("pic").src =
    "https://i.pinimg.com/originals/aa/23/9b/aa239b42f44029685e0d04197bf4522b.gif";
   document.getElementById("txtChange").textContent="Tos Date Babe😘💕"
};
