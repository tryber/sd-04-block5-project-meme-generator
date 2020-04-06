function addImage() {
    const userImage = document.getElementById('user-image');
    const memeImageContainer = document.getElementById('meme-image-container');
    const img = memeImageContainer.querySelector('img');
    
    userImage.addEventListener('change', function(event) {
        //const file = this.files[0];
        alert('Teste');
        img.src = URL.createObjectURL(this.files[0].name);
    });
}