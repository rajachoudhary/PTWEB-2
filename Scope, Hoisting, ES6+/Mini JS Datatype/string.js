let handleString = document.getElementById("handleString")
let fivePointString= document.getElementById("fivePoints")

var count6 = 1

handleString.addEventListener("click", function(){
   
    if(true && count6 === 1){
        fivePointsOfArray.innerText=""
        stringBulletPoints()
        count16++
    } 
    else{
        count6--
    }
})

function stringBulletPoints(){
    let ul = document.createElement("ul")

    let li1 = document.createElement("li")
    li1.textContent = "The String object is used to represent and manipulate a sequence of characters."

    let li2 = document.createElement("li")
    li2.textContent = "String literals can be specified using single or double quotes, "
    
    let li3 = document.createElement("li")
    li3.textContent = "A String object can always be converted to its primitive counterpart with the valueOf() method.."
    
    let li4  = document.createElement("li")
    li4.textContent = "String is a primitive data-type"
    
    let li5 = document.createElement("li")
    li5.textContent = "String objects are treated as all other objects are, by returning the objec."
    
    ul.append(li1,li2,li3,li4,li5)
    

    fivePointString.append(ul)
}

function stringPoints(){
    let ul = document.createElement("ul")

    let li1 = document.createElement("li")
    li1.textContent = "The String object is used to represent and manipulate a sequence of characters."

    let li2 = document.createElement("li")
    li2.textContent = "String literals can be specified using single or double quotes, "
    
    let li3 = document.createElement("li")
    li3.textContent = "A String object can always be converted to its primitive counterpart with the valueOf() method.."
    
    let li4  = document.createElement("li")
    li4.textContent = "String is a primitive data-type"
    
    let li5 = document.createElement("li")
    li5.textContent = "String objects are treated as all other objects are, by returning the objec."
    
    ul.append(li1,li2,li3,li4,li5)
    

    fivePointString.append(ul)
}

stringPoints()