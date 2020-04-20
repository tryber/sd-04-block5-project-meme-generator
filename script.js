    let textInput = document.getElementById("text-input");
    let memeImage = document.getElementById("meme-insert");
    let memeContainer = document.getElementById("meme-image-container");
    let img = document.getElementById('meme-image');

    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");

    let meme1 = document.getElementById("meme-1");
    let meme2 = document.getElementById("meme-2");
    let meme3 = document.getElementById("meme-3");
    let meme4 = document.getElementById("meme-4");
   
    function readImage(input) {
        setIMG(URL.createObjectURL(input.files[0]));
    }

    function configureBorder() {
        img.style.height = "";
        img.style.width = "";
        img.onload = function () {
            if (img.clientWidth > 600) {
                let heightPerc = 100 - (60000 / img.clientWidth);
                let height = img.clientHeight - ((img.clientHeight * heightPerc) / 100);

                memeContainer.style.height = height + "px";
                img.style.height = height + "px";

                memeContainer.style.width = "600px";
                img.style.width = "600px";
            } else {
                memeContainer.style.height = img.clientHeight + "px";
                memeContainer.style.width = img.clientWidth + "px";
            }
        }
    }

    function setIMG(image) {
        img.src = image;
        configureBorder();
    }

    function readTextImage(input) {
        document.getElementById('meme-text').innerText = input.value
    }

    memeImage.addEventListener('change', function () {
        readImage(this);
    });

    textInput.addEventListener("input", function () {
        readTextImage(this);
    });

    button1.addEventListener("click", function () {
        SetBorder(1);
    });
    button2.addEventListener("click", function () {
        SetBorder(2);
    });
    button3.addEventListener("click", function () {
        SetBorder(3);
    });

    meme1.addEventListener("click", function (event) {
        SetMemeDefault(event);
    });
    meme2.addEventListener("click", function (event) {
        SetMemeDefault(event);
    });
    meme3.addEventListener("click", function (event) {
        SetMemeDefault(event);
    });
    meme4.addEventListener("click", function (event) {
        SetMemeDefault(event);
    });

    function SetMemeDefault(image) {
        img.src = image.target.src;
        configureBorder();
    }

    function SetBorder(typeBorder) {
        switch (typeBorder) {
            case 1:
                memeContainer.style.border = "3px dashed red";
                break;
            case 2:
                memeContainer.style.border = "5px double blue";
                break;
            case 3:
                memeContainer.style.border = "6px groove green";
                break;
            default:
                memeContainer.style.border = "1px solid black";
                memeContainer.style.backgroundColor = "White";
                break;
        }
    }

    window.onload = function () {
        SetBorder(0);
        configureBorder();
    }
