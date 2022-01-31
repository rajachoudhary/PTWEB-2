async function getData() {
  let container = document.getElementById("container");
  let res = await fetch("http://localhost:3000/posts");
  let data = await res.json();
//   console.log(data);
  append(data, container);
}

function append(data, container) {
  data.forEach((el) => {

    let div1 = document.createElement("div");
    div1.style.border = "1px solid black";
    div1.style.width = "500px";
    div1.style.margin = "auto";
    div1.style.textAlign = "center";
    div1.style.backgroundColor = "black";
    div1.style.color = "white";
    console.log(el.author)
    div1.innerHTML = `
        <h3>Book Name :${el.book}</h3>
        <h2> Author Name :${el.author}</h2>
        <h3> Comments :${el.comments}</h3>
        <div>
        <div>Edit Commnetcd .</div>
        <input/>
        </div>
        <hr></hr>
       `;
    container.append(div1);
  });
}

window.addEventListener("load", function () {
  getData();
//   append();
});


submit.addEventListener("click", function (e) {
    let book = document.getElementById("book");
    let author = document.getElementById("author");
    let comments = document.getElementById("comments");
    let submit = document.getElementById("submit");

    e.preventDefault
  let userData = {
    book: book.value,
    auhtor: author.value,
    comments: comments.value,
  };

  console.log(userData)
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
