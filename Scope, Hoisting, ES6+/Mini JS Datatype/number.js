let handleNum= document.getElementById("handleNumber")
console.log(handleNum);
let fivePointsOfNum = document.getElementById("fivePoints")
var count2 = 1

handleNum.addEventListener("click", function(){
    
    
    if(true && count2 === 1){
        console.log(count2);
        fivePointsOfNum.innerText=""
        numBulletPoints()
        count2++
    }
    else{
        count2--
    }
})

function numBulletPoints(){
    let ul = document.createElement("ul")
   
    let li1 = document.createElement("li")
    li1.textContent = "Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25."

    let li2 = document.createElement("li")
    li2.textContent = "The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function."
    
    let li3 = document.createElement("li")
    li3.textContent = "When used as a function, Number(value) converts a string or other value to the Number type."
    
    let li4  = document.createElement("li")
    li4.textContent = "Larger numbers can be represented using the BigInt type."
    
    let li5 = document.createElement("li")
    li5.textContent = "The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, like double in Java or C#."
    
    ul.append(li1,li2,li3,li4,li5)

    fivePointsOfNum.append(ul)
}