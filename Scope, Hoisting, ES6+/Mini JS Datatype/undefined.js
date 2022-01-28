let handleUndefined= document.getElementById("handleUndefined")
console.log(handleNum);
let fivePointsOfUndef = document.getElementById("fivePoints")
var count4 = 1

handleUndefined.addEventListener("click", function(){
    
    
    if(true && count4 === 1){
        console.log(count2);
        fivePointsOfUndef.innerText=""
        undefBulletPoints()
        count4++
    }
    else{
        count4--
    }
})

function undefBulletPoints(){
    let ul = document.createElement("ul")
   
    let li1 = document.createElement("li")
    li1.textContent = "The global undefined property represents the primitive value undefined."

    let li2 = document.createElement("li")
    li2.textContent = "It is one of JavaScript's primitive types."
    
    let li3 = document.createElement("li")
    li3.textContent = "undefined is a property of the global object."
    
    let li4  = document.createElement("li")
    li4.textContent = "The initial value of undefined is the primitive value undefined."
    
    let li5 = document.createElement("li")
    li5.textContent = "A variable that has not been assigned a value is of type undefined"
    
    ul.append(li1,li2,li3,li4,li5)

    fivePointsOfUndef.append(ul)
}