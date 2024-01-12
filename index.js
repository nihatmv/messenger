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

  const contanier = document.querySelector(".contanier");
  const deleteButton = document.createElement("button");
  const myComment = document.createElement("div");
  const comments = document.createElement("div");

  deleteButton.classList.add("deleteButton");
  myComment.classList.add("myComment");
  comments.classList.add("comments");
  myComment.innerHTML = input.value;
  deleteButton.innerHTML = 'Delete'


  contanier.appendChild(comments);
  comments.appendChild(myComment);
  comments.appendChild(deleteButton);

  input.value = "";

  paddingValue += 10
  // window.resizeTo(window.innerWidth, window.innerHeight + 30);
  document.body.style.paddingTop = paddingValue + "px";
  contanier.style.height = (contanier.clientHeight + 30) + "px";
  console.log(deleteButton);


  deleteButton.addEventListener('click', e => {
    
    console.log(myComment.outerText);
});


})



resetButton.addEventListener('click', e=> [
  input.value = ""
]);

