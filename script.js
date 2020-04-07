let textInput = document.getElementById('text-input')
let pickABorder = document.getElementById('buttons')
let memeImageContainer = document.getElementById('meme-image-container')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')

function onSubmit(){
    event.preventDefault()
}

function setImage(){
    let inputFile = document.getElementById('meme-insert').files[0]
    let img = document.getElementById('meme-image')
    let fr = new FileReader()
    fr.onload = function(){
        img.src = fr.result
    }
    if(inputFile){
        fr.readAsDataURL(inputFile)
        pickABorder.style.visibility = 'visible'
    }
    else
        img.src = ''
}

textInput.addEventListener('keyup', ()=>{
    document.getElementById('meme-text').innerHTML = textInput.value
})

let borderButtons = document.querySelectorAll('#form-buttons button')
for(let i=0; i<borderButtons.length; i++)
    addEventClick(borderButtons[i])

function addEventClick(elem){
    elem.addEventListener('click', () => {
        switch(elem.id){
            case 'button1':
                memeImageContainer.style.border = '3px dashed red'
            break
            case 'button2':
                memeImageContainer.style.border = '5px double blue'
            break
            case 'button3':
                memeImageContainer.style.border = '6px groove green'
            break
        }
    })
}
