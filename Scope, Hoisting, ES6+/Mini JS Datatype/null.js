let handleNull= document.getElementById("handleNull")
console.log(handleNum);
let fivePointsOfNull = document.getElementById("fivePoints")
var count5 = 1

handleNull.addEventListener("click", function(){
    
    
    if(true && count5 === 1){
        console.log(count2);
        fivePointsOfNull.innerText=""
        nullBulletPoints()
        count5++
    }
    else{
        count5--
    }
})

function nullBulletPoints(){
    let ul = document.createElement("ul")
   
    let li1 = document.createElement("li")
    li1.textContent = "The value null represents the intentional absence of any object value. "

    let li2 = document.createElement("li")
    li2.textContent = "It is one of JavaScript's primitive values and is treated as falsy for boolean operations."
    
    let li3 = document.createElement("li")
    li3.textContent = "The value null is written with a literal: null."
    
    let li4  = document.createElement("li")
    li4.textContent = "null is not an identifier for a property of the global object,"
    
    let li5 = document.createElement("li")
    li5.textContent = "When checking for null or undefined, beware of the differences between equality (==) and identity (===) operators, as the former performs type-conversion."
    
    ul.append(li1,li2,li3,li4,li5)

    fivePointsOfNull.append(ul)
}