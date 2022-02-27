var elements = [];
<<<<<<< HEAD
var myDiv = document.querySelector(".col-lg-4");
var input = document.querySelector("#addTxt");
let myParagraph = document.createElement("p");
let headingParagraph = document.createTextNode(
  "Nothing to show here! Use 'Add to List' above to add tasks to the list."
);
myParagraph.appendChild(headingParagraph);

window.onload = function () {
  if (JSON.parse(localStorage.getItem("elements")) != null)
    elements = JSON.parse(localStorage.getItem("elements"));
  console.log(elements);
  myDiv.appendChild(myParagraph);
=======
// var input = document.querySelector("#addTxt");
window.onload = function () {
  if (JSON.parse(localStorage.getItem("elements")) != null) {
      elements = JSON.parse(localStorage.getItem("elements"));
      console.log(elements);
  }
>>>>>>> 514ab9437b8125233b56c232f80f8e57debdf571
  display();
};
function addElement() {
  if (document.querySelector("#addTxt").value.trim() != "") {
    myDiv.removeChild(myParagraph);
    elements.push(document.querySelector("#addTxt").value.trim());
    if (localStorage.getItem("elements") == null) {
      localStorage.setItem("elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("elements", JSON.stringify(elements));
    }
    document.querySelector("#addTxt").value = "";

    display();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Enter Some Task Pleace ",
      footer: '<a href="">Why do I have this issue?</a>',
    });
    document.querySelector("#addTxt").focus();
  }
  document.querySelector("#addTxt").focus();
}
function display() {
  document.querySelector(".list").innerHTML = "";
  for (var i = 0; i < elements.length; i++)
    document.querySelector(".list").innerHTML +=
      "<center><div class='element'>" +
      elements[i] +
      "<img class='tick' src = 'Photos/icons8-ok-64.png' onclick='strike(" +
      i +
      ")'><img class='dustbin' src = 'Photos/icons8-delete-80.png' onclick='del(" +
      i +
      ")'></div></center><br>";
}
function del(index) {
  elements.splice(index, 1);
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}
function strike(index) {
  if (elements[index].includes("<strike>")) {
    elements[index] = elements[index].replace("<strike>", "");
  } else {
    elements[index] = "<strike>" + elements[index] + "</strike>";
  }
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}
