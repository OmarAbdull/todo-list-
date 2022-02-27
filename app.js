var elements = [];
// var input = document.querySelector("#addTxt");
window.onload = function () {
  if (JSON.parse(localStorage.getItem("elements")) != null) {
      elements = JSON.parse(localStorage.getItem("elements"));
      console.log(elements);
  }
  display();
};
function addElement() {
  if (document.querySelector("#addTxt").value.trim() != "") {
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
