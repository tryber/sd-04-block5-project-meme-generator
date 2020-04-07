
let insertText = document.getElementById("text-input");

insertText.addEventListener('input', function () {
    memeText.innerHTML = insertText.value;
})

let memeInsert = document.getElementById("meme-insert");
   
memeInsert.addEventListener('input', function () {
   memeImage.src = memeInsert.value; 
    })