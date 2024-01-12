const commentButton = document.querySelector(".comment-button");
const nihat = document.querySelector(".div-nihat");
const input = document.querySelector(".input");
const resetButton = document.querySelector(".reset-button");

let paddingValue = 20;
commentButton.addEventListener('click', e => {
  if (input.value === "") {
    alert("You cannot send an emtpy message")
    return
  }

  const myComment = document.createElement("div");

  myComment.classList.add("myComment");
  myComment.innerHTML = input.value;

  const contanier = document.querySelector(".contanier");

  contanier.appendChild(myComment);

  paddingValue += 10
  input.value = "";
  window.resizeTo(window.innerWidth, window.innerHeight + 30);
  document.body.style.paddingTop = paddingValue + "px";
  contanier.style.height = (contanier.clientHeight + 30) + "px";


})


resetButton.addEventListener('click', e=> [
  input.value = ""
]);