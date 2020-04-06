window.onload = function () {
  this.console.log("OK");
  const inputText = document.getElementById("text-input");

  inputText.addEventListener("keyup", (event) => {
    const memeText = document.querySelector("#meme-text");
    memeText.textContent = event.target.value.toUpperCase();
  });
};
