class Rectangle{
    constructor(side1,side2){
        this.area = side1*side2
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side )
        this.perimeter = 4*side
    }
}

console.log(new Square(2).area )
console.log(new Square(3).perimeter )