class Circumference{
    constructor(side1, side2){
        this.perimeter = side1*side2
    }
}
class Circle extends Circumference{
    constructor(radius){
        super(44/7,radius)
    }
}


console.log(new Circle(4))


class Calculator{
    constructor(a,b,c){
        if(c===1){
            this.add = a+b
        }
        else if(c===2){
            this.sub = a-b
        }
        else if(c===3){
            this.mul = a*b
        }
        else if(c===4){
            this.div = Math.floor(a/b)
        }
    }
}

class Value extends Calculator{
    constructor(a,b,c){
        super(a,b,c)
    }
}
console.log(new Value(1,2,3))