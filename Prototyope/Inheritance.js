var grandParent = {
    grandFather : "Raj",
    grandMother :"Shivni"
}

let grandParentsSon = Object.create(grandParent)
grandParentsSon.name = "Ramesh"

let grandParentsDaughter = Object.create(grandParent)
grandParentsDaughter.name = "Sushi"



console.log(grandParentsSon);
console.log(grandParentsDaughter);


function son()
{
this.name='Raja'
}

var grandParents ={
    son:'x',
    daughter:'y'
}

son.prototype = grandParents

var s= new son()

