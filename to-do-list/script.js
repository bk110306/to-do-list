const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list");
function addtask(){
  if (inputBox.value === '') {
    alert("You have to write something! ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputBox.value = "";
  savedata();
}
listContainer.addEventListener(
  "click", function(e){
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    }
    else if(e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  }, false ); 

function savedata(){
  localStorage.setItem("data" , listContainer.innerHTML);
}  

function showlist(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showlist();