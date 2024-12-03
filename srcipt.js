const btnNo = document.getElementById("btnNo");
// const btnYes = document.getElementById("btnYes");
btnNo.onclick = () => {
  for (let i = 0; i < 10; i++) {
    let btnYes = document.createElement("button");
    btnYes.id = "btnYes";
    btnYes.textContent = "Yes";
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (innerWidth - 120));
    const randomY = Math.floor(Math.random() * (innerHeight - 60));

    const randX = Math.floor(Math.random() * (innerWidth - 130));
    const randY = Math.floor(Math.random() * (innerHeight - 70));

    btnYes.style.left = `${randomX}px`;
    btnYes.style.top = `${randomY}px`;

    btnNo.style.left = `${randX}px`;
    btnNo.style.top = `${randY}px`;
    btnNo.style.backgroundColor = "aqua";
    btnNo.style.color = "black";
    document.body.appendChild(btnYes);
  }
};
document.body.addEventListener("click", (e) => {
  if (e.target.id === "btnYes") {
    window.location.href="" 
  }
});
btnYes.onclick = () => {
  document.getElementById("pic").src =
    "https://i.pinimg.com/originals/aa/23/9b/aa239b42f44029685e0d04197bf4522b.gif";
  document.getElementById("txtChange").textContent = "Tos Date ot o sml !😘💕";
};
