var list = document.getElementById("list")
 
 function addTodo(){
     var todo = document.getElementById("todoList")
     

    //  create li tag with text node
     var li = document.createElement("li")
     var liText = document.createTextNode(todo.value)
     li.appendChild(liText)


    //  create delete button
    var delBtn = document.createElement("button")
    delBtn.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true" style="font-size: 30px; color: #880E4F;"></i>';
    // var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("onclick" , "deleteItem(this)" )
    delBtn.setAttribute("class" , "btn")

    // delBtn.appendChild(delText)
    li.appendChild(delBtn)


    // create edit button
    var editBtn = document.createElement("button")
    editBtn.innerHTML = '<i class="fa fa-pencil" aria-hidden="true" style="font-size: 30px; color: #880E4F;"></i>'
    // var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("onclick" , "editItem(this)")
    editBtn.setAttribute("class" , "btn")
    // editBtn.appendChild(editText)
    
    li.appendChild(editBtn)

    list.appendChild(li)

    todo.value = ""
}

 function deleteItem(e){
     e.parentNode.remove();
 }

 function editItem(e){
     var val = e.parentNode.firstChild.nodeValue;
     var updatedText = prompt("Your answer" , val)
     e.parentNode.firstChild.nodeValue = updatedText;
 }


 function deleteAll(){
     list.innerHTML = " "
 }