const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list");

function addtask() {
  if (inputBox.value === '') {
    alert("You have to write something! ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    
    // Add edit and delete buttons
    let editSpan = document.createElement("span");
    editSpan.innerHTML = "✎"; // Edit icon
    editSpan.classList.add("edit");
    li.appendChild(editSpan);
    
    let deleteSpan = document.createElement("span");
    deleteSpan.innerHTML = "x"; // Delete icon
    deleteSpan.classList.add("delete");
    li.appendChild(deleteSpan);
    
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  savedata();
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedata();
  } else if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    savedata();
  } else if (e.target.classList.contains("edit")) {
    let li = e.target.parentElement;
    let currentText = li.childNodes[0].textContent;
    let newText = prompt("Edit your task:", currentText);
    if (newText !== null && newText !== '') {
      li.childNodes[0].textContent = newText;
      savedata();
    }
  }
}, false);

function savedata() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showlist() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showlist();
