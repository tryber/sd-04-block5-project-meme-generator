let textInput = document.getElementById('text-input')

textInput.addEventListener('keyup', ()=>{
    document.getElementById('meme-text').innerHTML = textInput.value
})

function setImage(){
    let inputFile = document.getElementById('meme-insert').files[0]
    let img = document.getElementById('meme-image')
    let fr = new FileReader()
    fr.onload = function(){
        img.src = fr.result
    }
    if(inputFile)
        fr.readAsDataURL(inputFile)
    else
        img.src = ''
}