var myList = document.getElementsByTagName("LI");
var i;
for (let i = 0; i < myList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement
        div.style.display = "none";
    }
}

var list = document.querySelector(".to-do--list--items");
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todoInput");
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if(inputValue === '') {
        alert("You must write something!")
    } else{
        document.getElementById("toDoList").appendChild(li);
    }
    document.getElementById("todoInput").value = "";

    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }        
    }
}