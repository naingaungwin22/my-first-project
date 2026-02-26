const button = document.getElementById("changeBtn");
const paragraph = document.getElementById("about");

let isChanged = false;

button.addEventListener("click", function() {
    if (isChanged === false) {
        paragraph.textContent = "I will become a front-end developer.";
        isChanged = true;
        button.textContent = "Go back"
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        paragraph.textContent = "I am Naing Aung Win from Myanmar. I am 22 years old. My dream is to become a front-end developer.";
        isChanged = false;
        button.textContent = "Change Text"
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});
