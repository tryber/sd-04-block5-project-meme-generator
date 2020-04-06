function addImage() {
    const img = document.querySelector('img');
    img.style.display = 'block';
    img.src = URL.createObjectURL(event.target.files[0]);
}