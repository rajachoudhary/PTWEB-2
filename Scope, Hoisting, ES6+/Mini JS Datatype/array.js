let handleArray = document.getElementById("handleArray")
let fivePointsOfArray = document.getElementById("fivePoints")

var count1 = 1

handleArray.addEventListener("click", function(){
   
    if(true && count1 === 1){
        fivePointsOfArray.innerText=""
        ArrayBulletPoints()
        count1++
    } 
    else{
        count1--
    }
})

function ArrayBulletPoints(){
    let ul = document.createElement("ul")
   
    let li1 = document.createElement("li")
    li1.textContent = "Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations"

    let li2 = document.createElement("li")
    li2.textContent = "JavaScript arrays are zero-indexed"
    
    let li3 = document.createElement("li")
    li3.textContent = "The first element of an array is at index 0, and the last element is at the index value equal to the value of the array's length property minus 1."
    
    let li4  = document.createElement("li")
    li4.textContent = "Array is a non-primitive data-type"
    
    let li5 = document.createElement("li")
    li5.textContent = "Arrays cannot use strings as element indexes but must use integers."
    
    ul.append(li1,li2,li3,li4,li5)

    fivePointsOfArray.append(ul)
}