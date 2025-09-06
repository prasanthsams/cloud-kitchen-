var enteredText=""
var container =document.getElementById("products")
var search =document.getElementById("search")
    var elements=container.querySelectorAll("div")
console.log(elements)

 function check(event){
    enteredText = event.target.value

    for (var count=0;count< elements.length; count=count+1){
    if (elements[count].textContent.indexOf(enteredText) < 0)
 {
    elements[count].style.display ="none"
 }
 else{
    elements[count].style.display="block"
 
 }
}
 }
 var sidenavbar=document.querySelector(".side-navbar")


function show() {
    sidenavbar.style.left="0"
 
}

function closecase(){
    sidenavbar.style.left="-60%"
}
