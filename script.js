const addBtn = document.querySelector('button');
const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const addTask = ()=>{
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // listContainer.appendChild(li);
        // Insert the new task at the top of the list
        if (listContainer.firstChild) {
            listContainer.insertBefore(li, listContainer.firstChild);
        } else {
            listContainer.appendChild(li);
        }
        inputBox.value = '';
        let span = document.createElement('span');
        span.innerHTML= "\u00d7";
        li.appendChild(span);
        saveData();
    }
}
addBtn.addEventListener('click',addTask);
inputBox.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        addTask();
    }
})

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove(); //parent element is LI
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

const showList = function(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showList();