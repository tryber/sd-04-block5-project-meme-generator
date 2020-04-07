
let insertText = document.getElementById("text-input");

insertText.addEventListener('input', function () {
    memeText.innerHTML = insertText.value;
})

let image = document.querySelector("#meme-insert");
image.addEventListener("input", function () {
    image = sessionStorage.setItem("image", image.value);
    let createdImagTag = document.createElement("img");
    createdImagTag.src = sessionStorage.image;
    document.querySelector("#meme-image-container").appendChild(createdImagTag);  
})


// let memeInsert = document.getElementById("meme-insert");
   
// memeInsert.addEventListener('input', function () {
//     let image = localStorage.setItem("image", memeInsert.value); 
    

// let createImagTag = document.createElement("img");
// createImagTag.src = image;
// image = document.getElementById("meme-image-container").appendChild(createImagTag);
// })