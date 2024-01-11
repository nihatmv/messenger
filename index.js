const commentButton = document.querySelector(".comment-button");
const nihat = document.querySelector(".div-nihat");
const input = document.querySelector(".input");
const resetButton = document.querySelector(".reset-button");

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


  input.value = "";
})


resetButton.addEventListener('click', e=> [
  input.value = ""
]);