
function spanList(){
let spanElements = document.querySelectorAll("li>span")

for (let index = 0; index < spanElements.length; index++) {
    const element = spanElements[index];
    element.addEventListener("click", function() 
{this.parentElement.style.display ="none"

})
}
}

function newElement() {
    var node = document.createElement("LI");  
    
    var inputnode = document.querySelector("#task");         
    
    let textnode=inputnode.value.trim()
    if (textnode==""||textnode==null ){
        showToast("error");
    }
    else {
    node.innerText=textnode; 
    var child = document.createElement("SPAN")
    child.innerText="x"
    child.classList.add("close");
    child.addEventListener("click", function() {
        this.parentElement.style.display ="none";
        console.log("tıklandı");
      });
    node.appendChild(child)  ;
    
    let listNode = document.getElementById("list").appendChild(node);  
    localStorage.setItem("items",textnode)
    doneElement();
    showToast("success");  
    inputnode.value="";
    }
}
function showToast(type) {
    $(".toast."+type).toast('show')
}


function deleteElement(element) {
    
    var nodename = document.querySelector(element);         
    nodename.remove();
    console.log(nodename);
    
    }
    
function doneElement(){
    let listElements = document.querySelectorAll("li");
    
    for (let index = 0; index < listElements.length; index++) {
        var element = listElements[index];
        element.addEventListener("click", function name() {
            if (this.classList.contains("checked")) {
                this.classList.remove("checked");}
            else{
                this.classList.add("checked");
            }
        })
    }

}
function localGet() {
  

  let itemsArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

 
  const data = JSON.parse(localStorage.getItem("items"));
  
  
}
function localSave() {
    let listElements = document.querySelectorAll("li");
    for (let index = 0; index < listElements.length; index++) {
        const element = listElements[index];
        //localStorage.setItem("items",element.textContent)
    }
    
     
}
function liMaker(text) {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  }
spanList();
doneElement();
localSave();
localGet();
