function MyArray(){
    this.length = 0
   
}

MyArray.prototype.push = function (value){
    
    this[this.length] = value
    this.length++
    return this.length
}

let a = new MyArray()
a.push(1)
a.push(2)
a.push(3)
a.push(4)


 MyArray.prototype.reverse1 = function() {
    var revArr= [],
        n = this.length
    for(var i=n-1;i>=0;i--) {
        revArr.push(this[i]) 
    }
return revArr
} 


console.log(a.reverse1()) 
console.log(a[0]);