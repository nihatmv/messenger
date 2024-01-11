const commentButton = document.querySelector(".comment-button");
const nihat = document.querySelector(".div-nihat");
const input = document.querySelector(".input");

commentButton.addEventListener('click', e => {
  const newDiv = document.createElement("div");

  newDiv.innerHTML = input.value;
  newDiv.classList.add("newDiv"); // Add the "newDiv" class to the new div
  newDiv.style.width = '200px'
  newDiv.style.height = '200px'


  const parent = document.querySelector(".contanier");
  parent.appendChild(newDiv);


  input.value = "";

})