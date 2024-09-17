let gameContainer = document.getElementById("game-container");
let player1ScoreElem = document.getElementById("player1-score");
let player2ScoreElem = document.getElementById("player2-score");
let currentPlayerElem = document.getElementById("current-player");
let player1MatchedImages = document.getElementById("player1-matched-images");
let player2MatchedImages = document.getElementById("player2-matched-images");

let cardImages  = ['https://cdn.goconqr.com/uploads/media/image/35152847/desktop_7ca32997-88af-46b9-a252-4d599d81855c.jpg',
                'https://static.vecteezy.com/system/resources/thumbnails/013/086/753/small_2x/cute-little-hamster-rodent-pet-animal-in-fawn-animated-cartoon-illustration-vector.jpg',
                'https://st.depositphotos.com/1787196/1327/i/450/depositphotos_13270628-stock-illustration-3d-cartoon-bird.jpg',
                'https://i.pinimg.com/736x/93/bb/66/93bb66d5c78d8fabb88f54c5bed6df75.jpg',
                'https://st.depositphotos.com/1967477/1843/i/450/depositphotos_18437991-stock-illustration-monkey-cartoon-dancing.jpg',
                'https://i.pinimg.com/736x/7b/3e/02/7b3e023bfa04335c472626180f143b9e.jpg',
                'https://cdn.goconqr.com/uploads/media/image/35152847/desktop_7ca32997-88af-46b9-a252-4d599d81855c.jpg',
                'https://static.vecteezy.com/system/resources/thumbnails/013/086/753/small_2x/cute-little-hamster-rodent-pet-animal-in-fawn-animated-cartoon-illustration-vector.jpg',
                'https://st.depositphotos.com/1787196/1327/i/450/depositphotos_13270628-stock-illustration-3d-cartoon-bird.jpg',
                'https://i.pinimg.com/736x/93/bb/66/93bb66d5c78d8fabb88f54c5bed6df75.jpg',
                'https://st.depositphotos.com/1967477/1843/i/450/depositphotos_18437991-stock-illustration-monkey-cartoon-dancing.jpg',
                'https://i.pinimg.com/736x/7b/3e/02/7b3e023bfa04335c472626180f143b9e.jpg'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let matchedPairs = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCard(imageSrc) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front"></div>
            <div class="card-back">
                <img src="${imageSrc}" alt="Image">
            </div>
        </div>
    `;
    card.addEventListener("click", flipCard);
    return card;
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.querySelector(".card-back img").src === secondCard.querySelector(".card-back img").src;

    isMatch ? handleMatch() : unflipCards();
}

function handleMatch() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    let matchedImageSrc = firstCard.querySelector(".card-back img").src;
    displayMatchedImage(matchedImageSrc);

    updateScore();
    resetBoard();

    matchedPairs++;
    if (matchedPairs === cardImages.length / 2) {
        endGame();
    }
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        switchPlayer();
        resetBoard();
    }, 1500);
}

function displayMatchedImage(src) {
    let img = document.createElement("img");
    img.src = src;
    img.classList.add("matched-image");

    if (currentPlayer === 1) {
        player1MatchedImages.appendChild(img);
    } else {
        player2MatchedImages.appendChild(img);
    }
}

function updateScore() {
    if (currentPlayer === 1) {
        player1Score++;
        player1ScoreElem.textContent = player1Score;
    } else {
        player2Score++;
        player2ScoreElem.textContent = player2Score;
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    currentPlayerElem.textContent = `Jugador ${currentPlayer}`;
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function endGame() {
    setTimeout(() => {
        alert(`Juego terminado. Jugador 1: ${player1Score} puntos, Jugador 2: ${player2Score} puntos.`);
    }, 500);
}

function initGame() {
    let shuffledImages = shuffle(cardImages);
    shuffledImages.forEach(imageSrc => {
        let card = createCard(imageSrc);
        gameContainer.appendChild(card);
    });
}

initGame();