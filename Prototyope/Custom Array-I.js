function MyArray(){
    this.length = 0
   
}

MyArray.prototype.push = function (value){
    
    this[this.length] = value
    this.length++
    return this.length
}

let c = new MyArray()
c.push(1)
c.push(2)
c.push(3)
c.push(4)
console.log(c);