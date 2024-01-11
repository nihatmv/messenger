const commentButton = document.querySelector(".comment-button");
const nihat = document.querySelector(".div-nihat");
const input = document.querySelector(".input");
const resetButton = document.querySelector(".reset-button");

commentButton.addEventListener('click', e => {
  // let myImage = document.createElement("img");
  // myImage.src = "file:////Users/Mammadov/Desktop/ADA_Nihat/messenger/photoes/avatar4 copy.svg";
  const myComment = document.createElement("div");

  // myImage.classList.add("myImage");
  myComment.classList.add("myComment");
  myComment.innerHTML = input.value;

  const contanier = document.querySelector(".contanier");

  console.log(contanier);
  contanier.appendChild(myComment);
  // myComment.appendChild(myImage);

  input.value = "";
  contanier.style.height = '600px'
  contanier.style.height += '200px'
})

// when you submit without a comment it still submit



resetButton.addEventListener('click', e=> [
  input.value = ""
]);