
 async function getData() {
     let container = document.getElementById("container")
    let res = await fetch('http://localhost:3000/posts');
    let data = await res.json()
    console.log( data)
    append(data,container)
}


function append(data,container){
    data.forEach(el => {
        let div1 = document.createElement("div")
        div1.style.border  = "1px solid black"
        div1.style.width = "500px"
        div1.style.margin = "auto"
        div1.style.textAlign = "center"
        div1.style.backgroundColor = "black"
        div1.style.color = "white"
       div1.innerHTML=`
        <h3>Book Name :${el.book}</h3>
        <h2> Author Name :${el.author}</h2>
        <h3> Comments :${el.comments[0]}</h3>
        <div>
        <div>Edit Commnetcd .</div>
        <input/>
        </div>
        <hr></hr>
       `
       container.append(div1)
    });
   
}

window.addEventListener("load", function(){

    getData()
    append()
})

  
