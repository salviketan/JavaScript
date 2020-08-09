
let createButton = document.querySelector("#button");
createButton.addEventListener("click", createNewTag);


function createNewTag(){
    let createdTask = document.getElementById("the-input").value;
    // console.log(createdTask);

    if(createdTask == ""){
        document.querySelector("#empty-bar").innerHTML = "Create Task field can not be empty."
    }else{
        let li = document.createElement("li");
        let srNo = document.getElementsByTagName("li");
        console.log(srNo.length);
        li.innerHTML = (srNo.length +1) + ".  " +createdTask;

        let buttonTag = document.createElement("button");
        buttonTag.setAttribute("class", "close");
        buttonTag.setAttribute("id", "remove")
        buttonTag.setAttribute("onclick", "removeButton(this);");
        buttonTag.innerHTML = "Complete";
        // console.log(spanTag);
        li.appendChild(buttonTag);
        // console.log(li);

        document.querySelector("#the-ul").appendChild(li);
        document.querySelector("#empty-bar").innerHTML = '';
    }
    document.querySelector("#the-input").value = '';

}

function removeButton(buttonTag){

    let completedli = buttonTag.parentElement;
    // completeBtnText = buttonTag.parentElement.textContent;

    let completeButton = buttonTag;
    completeButton.setAttribute("onclick", "completeRemoveButton(this);");
    completeButton.setAttribute("id", "complete")
    completeButton.innerHTML = "Remove";

    buttonTag.parentElement.remove()
    // console.log(completedli);

    document.querySelector("#complete-ul").appendChild(completedli);

}

function completeRemoveButton(completeButton){
    completeButton.parentElement.remove();

}

// let emptyRemainUl = document.querySelector("#the-ul").innerHTML;
// let emptyCompleteUl = document.querySelector("#complete-ul").innerHTML

// if(emptyRemainUl === ""){
//     document.querySelector("#remainbox-para").innerHTML = "No task to complete."
// }
