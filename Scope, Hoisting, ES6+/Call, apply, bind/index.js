function Teacher(qualification,age){
    this.qualification = qualification;
    this.age = age;
}

function Person(name,subject,qualification,age){
    Teacher.call(this,qualification,age)
    this.name = name;
    this.subject = subject;
}
function Person1(name,subject,qualification,age){
    Teacher.apply(this,[qualification,age])
    this.name = name;
    this.subject = subject;
}
function Person2(name,subject,qualification,age){
    let newTeacher =Teacher.bind(this)
    newTeacher(qualification,age)
    this.name = name;
    this.subject = subject;
}

let P1 = new Person("Raja","Math","B.Ed",28)
let P2 = new Person1("Raj","Science","B.Sc",27)
let P3 = new Person2("Rishav","Physics","M.Tech",30)
console.log(P1);
console.log(P2);
console.log(P3);