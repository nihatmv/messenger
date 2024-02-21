const commentButton = document.querySelector(".comment-button");
const nihat = document.querySelector(".div-nihat");
const input = document.querySelector(".input");
const resetButton = document.querySelector(".reset-button");
const contanier = document.querySelector(".contanier");

let inputs = [];
let outputs = [];
let noCharactersRegex = /^\s*$/;

let paddingValue = 20;
let myComment = document.createElement("div");

commentButton.addEventListener("click", (e) => {
  if (noCharactersRegex.test(input.value)) {
    alert("You cannot send an empty message");
    return;
  } else {
    console.log("hello");

    let myComment = document.createElement("div");
    let deleteButton = document.createElement("button");
    let comments = document.createElement("div");
    myComment.classList.add("myComment");
    deleteButton.classList.add("deleteButton");
    comments.classList.add("comments");

    myComment.innerHTML = input.value;
    deleteButton.innerHTML = "Delete";

    inputs.push(input.value);
    outputs.push(myComment.innerHTML);

    contanier.appendChild(comments);
    comments.appendChild(myComment);
    comments.appendChild(deleteButton);

    input.value = "";

    paddingValue += 25;
    document.body.style.paddingTop = paddingValue + "px";
    contanier.style.height = contanier.clientHeight + 50 + "px";

    deleteButton.addEventListener("click", (e) => {
      if (inputs[0] === outputs[0]) {
        comments.remove();
      }
    });
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (noCharactersRegex.test(input.value)) {
      alert("You cannot send an empty message");
      e.preventDefault();

      input.value = "";
      return;
    } else {
      let myComment = document.createElement("div");
      let deleteButton = document.createElement("button");
      let comments = document.createElement("div");
      myComment.classList.add("myComment");
      deleteButton.classList.add("deleteButton");
      comments.classList.add("comments");

      myComment.innerHTML = input.value;
      deleteButton.innerHTML = "Delete";

      inputs.push(input.value);
      outputs.push(myComment.innerHTML);

      contanier.appendChild(comments);
      comments.appendChild(myComment);
      comments.appendChild(deleteButton);

      e.preventDefault();
      input.value = "";

      paddingValue += 25;
      document.body.style.paddingTop = paddingValue + "px";
      contanier.style.height = contanier.clientHeight + 50 + "px";

      deleteButton.addEventListener("click", (e) => {
        if (inputs[0] === outputs[0]) {
          comments.remove();
        }
      });
    }
  }
});

resetButton.addEventListener("click", (e) => [(input.value = "")]);
