let handleObject= document.getElementById("handleObjects")
console.log(handleObject);
let fivePointsOfObj = document.getElementById("fivePoints")
var count3 = 1

handleObject.addEventListener("click", function(){
    
    
    if(true && count3 === 1){
        // console.log(count2);
        fivePointsOfNum.innerText=""
        objBulletPoints()
        count3++
    }
    else{
        count3--
    }
})

function objBulletPoints(){
    let ul = document.createElement("ul")
   
    let li1 = document.createElement("li")
    li1.textContent = "The Object class represents one of JavaScript's data types."

    let li2 = document.createElement("li")
    li2.textContent = "It is used to store various keyed collections and more complex entities"
    
    let li3 = document.createElement("li")
    li3.textContent = "TObjects can be created using the Object() constructor or the object initializer / literal syntax."
    
    let li4  = document.createElement("li")
    li4.textContent = "Nearly all objects in JavaScript are instances of Object"
    
    let li5 = document.createElement("li")
    li5.textContent = "A typical object inherits properties (including methods) from Object.prototype"
    
    ul.append(li1,li2,li3,li4,li5)

    fivePointsOfObj.append(ul)
}