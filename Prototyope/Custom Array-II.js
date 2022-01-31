function MyArray(){
    this.length = 0
   
}

MyArray.prototype.push = function (value){
    
    this[this.length] = value
    this.length++
    return this.length
}

let b = new MyArray()
b.push(1)
b.push(2)
b.push(3)
b.push(4)
console.log(b);