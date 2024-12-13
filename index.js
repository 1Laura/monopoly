"use strict";
const monopolyGameArray = [
    {
        "name": "GO",
        "type": "special",
        "description": "Collect $200 when you pass."
    },
    {
        "name": "Mediterranean Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [2, 10, 30, 90, 160, 250],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Community Chest",
        "type": "special",
        "description": "Draw a Community Chest card."
    },
    {
        "name": "Baltic Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [4, 20, 60, 180, 320, 450],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Income Tax",
        "type": "tax",
        "amount": 200
    },
    {
        "name": "Reading Railroad",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card."
    },
    {
        "name": "Oriental Avenue",
        "type": "property",
        "color": "lightblue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Vermont Avenue",
        "type": "property",
        "color": "lightblue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Connecticut Avenue",
        "type": "property",
        "color": "lightblue",
        "price": 120,
        "rent": [8, 40, 100, 300, 450, 600],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Jail",
        "type": "special",
        "description": "Just visiting or in jail."
    },
    {
        "name": "St. Charles Place",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Electric Company",
        "type": "utility",
        "price": 150,
        "rentMultiplier": [4, 10]
    },
    {
        "name": "States Avenue",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Virginia Avenue",
        "type": "property",
        "color": "pink",
        "price": 160,
        "rent": [12, 60, 180, 500, 700, 900],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "St. James Place",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Tennessee Avenue",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "New York Avenue",
        "type": "property",
        "color": "orange",
        "price": 200,
        "rent": [16, 80, 220, 600, 800, 1000],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Free Parking",
        "type": "special",
        "description": "No action."
    },
    {
        "name": "Kentucky Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Indiana Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Illinois Avenue",
        "type": "property",
        "color": "red",
        "price": 240,
        "rent": [20, 100, 300, 750, 925, 1100],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "B&O Railroad",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card."
    },
    {
        "name": "Atlantic Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Ventnor Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Water Works",
        "type": "utility",
        "price": 150,
        "rentMultiplier": [4, 10]
    },
    {
        "name": "Marvin Gardens",
        "type": "property",
        "color": "yellow",
        "price": 280,
        "rent": [24, 120, 360, 850, 1025, 1200],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Go to Jail",
        "type": "special",
        "description": "Move directly to Jail. Do not pass GO, do not collect $200."
    },
    {
        "name": "Pacific Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "North Carolina Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Pennsylvania Avenue",
        "type": "property",
        "color": "green",
        "price": 320,
        "rent": [28, 150, 450, 1000, 1200, 1400],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Short Line",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Park Place",
        "type": "property",
        "color": "darkblue",
        "price": 350,
        "rent": [35, 175, 500, 1100, 1300, 1500],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Luxury Tax",
        "type": "tax",
        "amount": 100
    },
    {
        "name": "Boardwalk",
        "type": "property",
        "color": "darkblue",
        "price": 400,
        "rent": [50, 200, 600, 1400, 1700, 2000],
        "houseCost": 200,
        "hotelCost": 200
    }
];
const gameBoardArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    35, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11,
    34, -1, -1, -1, -1, -1, -1, -1, -1, -1, 12,
    33, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13,
    32, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14,
    31, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15,
    30, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16,
    29, -1, -1, -1, -1, -1, -1, -1, -1, -1, 17,
    28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18
];
const gameBoardHtml = document.querySelector(".monopoly-board");
function renderMonopolyBoard(monopolyGameArray, gameBoardArray, gameBoardHtml) {
    gameBoardArray.forEach((cellIndex, index) => {
        const cell = document.createElement("div");
        cell.classList.add("board-cell");
        if (cellIndex === -1) {
            cell.classList.add("empty-cell");
        }
        else {
            const boardItem = monopolyGameArray[cellIndex];
            cell.classList.add("game-cell");
            // cell.setAttribute("data-name", boardItem.name);
            cell.setAttribute("id", cellIndex.toString());
            cell.innerHTML = `
                <div class="cell-name">${boardItem.name}</div>
                <div class="cell-details">
                    ${boardItem.type === "property"
                ? `<div class="cell-color" style="background-color: ${boardItem.color};"></div>
                   <div class="cell-price">$${boardItem.price}</div>`
                : boardItem.type === "special"
                    ? `<div class="cell-description">${boardItem.description}</div>`
                    : boardItem.type === "tax"
                        ? `<div class="cell-tax">Tax: $${boardItem.amount}</div>`
                        : boardItem.type === "railroad"
                            ? `<div class="cell-railroad">Railroad: $${boardItem.price}</div>`
                            : boardItem.type === "utility"
                                ? `<div class="cell-utility">Utility: $${boardItem.price}</div>`
                                : ""}
                </div>
            `;
        }
        gameBoardHtml.appendChild(cell);
    });
}
renderMonopolyBoard(monopolyGameArray, gameBoardArray, gameBoardHtml);
const players = [
    {
        name: "Player 1",
        position: 0,
        money: 1500,
        emoji: "🕷",
        element: document.getElementById("player-0-html")
    },
    {
        name: "Player 2",
        position: 0,
        money: 1500,
        emoji: "🐞",
        element: document.getElementById("player-1-html")
    }
];
const playerInfo = document.getElementById("player-html");
const rollDiceButton = document.querySelector(".dice-button");
let currentPlayerIndex = 0;
const boardSize = 900;
const cellsCoordinates = [
    { id: 0, top: 10, left: 40 },
    { id: 1, top: 10, left: 120 },
    { id: 2, top: 10, left: 200 },
    { id: 3, top: 10, left: 280 },
    { id: 4, top: 10, left: 360 },
    { id: 5, top: 10, left: 440 },
    { id: 6, top: 10, left: 520 },
    { id: 7, top: 10, left: 600 },
    { id: 8, top: 10, left: 680 },
    { id: 9, top: 10, left: 760 },
    { id: 10, top: 10, left: 840 },
    { id: 11, top: 100, left: 840 }, //sukasi zemyn
    { id: 12, top: 190, left: 840 },
    { id: 13, top: 280, left: 840 },
    { id: 14, top: 370, left: 840 },
    { id: 15, top: 460, left: 840 },
    { id: 16, top: 540, left: 840 },
    { id: 17, top: 620, left: 840 },
    { id: 18, top: 710, left: 840 },
    { id: 19, top: 710, left: 760 }, //sukasi kairen
    { id: 20, top: 710, left: 680 },
    { id: 21, top: 710, left: 600 },
    { id: 22, top: 710, left: 520 },
    { id: 23, top: 710, left: 440 },
    { id: 24, top: 710, left: 360 },
    { id: 25, top: 710, left: 280 },
    { id: 25, top: 710, left: 280 },
    { id: 26, top: 710, left: 200 },
    { id: 27, top: 710, left: 120 },
    { id: 28, top: 710, left: 40 },
    { id: 29, top: 620, left: 40 }, //sukasi aukstyn
    { id: 30, top: 540, left: 40 },
    { id: 31, top: 460, left: 40 },
    { id: 32, top: 370, left: 40 },
    { id: 33, top: 280, left: 40 },
    { id: 34, top: 190, left: 40 },
    { id: 35, top: 100, left: 40 },
];
function movePlayer(player, position) {
    cellsCoordinates.forEach((cell) => {
        if (cell.id === position) {
            player.element.style.top = `${cell.top}px`;
            player.element.style.left = `${cell.left}px`;
            player.position = position;
        }
    });
}
// Update the board
function updateBoard() {
    players.forEach((player) => {
        movePlayer(player, player.position);
    });
}
// Update player info
function updatePlayerInfo() {
    playerInfo.innerHTML = players
        .map((player) => `<div>${player.name} ${player.emoji} : Position ${player.position}, Money: $${player.money}</div>`)
        .join('');
}
// Roll the dice
function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`Dice roll: ${diceRoll}`);
    const currentPlayer = players[currentPlayerIndex];
    const newPosition = (currentPlayer.position + diceRoll) % boardSize;
    movePlayer(currentPlayer, newPosition);
    // Example penalty/reward
    // if (newPosition % 11 === 0) {
    //     currentPlayer.money -= 100;
    // } else {
    //     currentPlayer.money += 50;
    // }
    const landedCell = monopolyGameArray[gameBoardArray[newPosition]];
    console.log(landedCell);
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updatePlayerInfo();
}
// Initial setup
players.forEach((player) => movePlayer(player, player.position));
updatePlayerInfo();
updateBoard();
// Event listener
rollDiceButton.addEventListener('click', rollDice);
