let handleFunction = document.getElementById("handleFunction")
let fivePointsOfFunc = document.getElementById("fivePoints")
var count = 1

handleFunction.addEventListener("click", function(){
    
    
    if(true && count === 1){
        fivePointsOfFunc.innerText=""
        funcBulletPoints()
        count++
    }
    else{
        count1--
    }
})

function funcBulletPoints(){
    let ul = document.createElement("ul")
   
    let li1 = document.createElement("li")
    li1.textContent = "Functions are one of the fundamental building blocks in JavaScript"

    let li2 = document.createElement("li")
    li2.textContent = "Parameters are essentially passed to functions by value"
    
    let li3 = document.createElement("li")
    li3.textContent = "The function square takes one parameter, called number."
    
    let li4  = document.createElement("li")
    li4.textContent = "Function is a non-primitive data-type"
    
    let li5 = document.createElement("li")
    li5.textContent = "A list of parameters to the function, enclosed in parentheses and separated by commas."
    
    ul.append(li1,li2,li3,li4,li5)

    fivePointsOfFunc.append(ul)
}