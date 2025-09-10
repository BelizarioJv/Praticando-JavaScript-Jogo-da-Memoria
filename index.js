const emojis = [
    "🐶",
    "🐶",
    "🐺",
    "🐺",
    "🐱",
    "🐱",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🦒",
    "🦒",
    "🦊",
    "🦊",
    "🦝",
    "🦝"
    ];

let openCards = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledEmojis = shuffle([...emojis]);

for(let i = 0;i < emojis.length ; i++ ){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffledEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box); 
}

function handleClick() {
    if (this.classList.contains("boxMatch") || openCards.includes(this)) {
        return;
    }

    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch (){
    if (openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }
    else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = []
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu , parabens!!!")
    }
}
