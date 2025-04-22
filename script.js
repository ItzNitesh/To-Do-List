const inputBox = document.getElementById("input-box");
const listConteiner = document.getElementById("list-container")
const addTask = document.getElementById("add-tast");


addTask.addEventListener("click", () => {
    if (inputBox.value === '') {
        alert("You must write somthing")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConteiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    inputBox.value = "";
    saveData();
})

listConteiner.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listConteiner.innerHTML)
}

function showTask(){
    listConteiner.innerHTML=localStorage.getItem("data")
}

showTask()