function addtodo(){

    var input = document.getElementById("todo-input");
    console.log(input.value);

    var list = document.getElementById("listItems");
    var listElement = document.createElement("li");
    var listText = document.createTextNode(input.value);
    listElement.appendChild(listText);





    list.appendChild(listElement);
    console.log(listElement);

    input.value = "";

    
    // ########### deltbtn ############

    var delbtn = document.createElement("button");

    var delbtnText = document.createTextNode("Delete");

    delbtn.appendChild(delbtnText);

    delbtn.setAttribute("onclick","delTodo(this)");

    listElement.appendChild(delbtn);


// ############## editbtn ###############

    var Editbtn = document.createElement("button");

    var EditbtnText = document.createTextNode("Edit");

    Editbtn.appendChild(EditbtnText);

    listElement.appendChild(Editbtn);
   
    Editbtn.setAttribute("onclick","EditTodo(this)");


}


function deletetodo(){

    var list = document.getElementById("listItems");

    list.remove();
}

function delTodo(x){
console.log(x.parentNode.remove())
}


function EditTodo(x){
    var inputfield = prompt("Enter updated value".currentli)

    var currentli = x.parentNode.firstChild.nodeValue

    x.parentNode.firstChild.nodeValue = inputfield
}

