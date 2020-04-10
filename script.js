function readImage(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('meme-image')
                .src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function readTextImage(){
    document.getElementById('meme-text').innerText = document.getElementById('text-input').value
}