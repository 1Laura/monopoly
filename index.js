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
    },
    {
        name: "Player 2",
        position: 0,
        money: 1500,
        emoji: "🐞",
    }
];
const playersBoxHtml = document.querySelector(".players-box-html");
// Initialize player elements
players.forEach((player, index) => {
    playersBoxHtml.innerHTML += `
        <div class="player-${index}-box">
            <div class="player-${index}-name">${player.name}</div>
            <div class="player-${index}-emoji">${player.emoji}</div>
            <div class="player-${index}-position">Position: ${player.position}</div>
            <div class="player-${index}-money">Money: ${player.money}</div>
            <div class="player-${index}-steps">Steps: </div>
        </div>`;
});
const playerFirst = document.querySelector(".player-0-box");
const playerSecond = document.querySelector(".player-1-box");
const playerFirstSteps = document.querySelector(".player-0-steps");
const playerSecondSteps = document.querySelector(".player-1-steps");
const playerFirstHtml = document.getElementById("player-0-html");
const playerSecondHtml = document.getElementById("player-1-html");
// playerFirst.onclick = (event) => {
//     playerSecond.style.backgroundColor = "white";
//     playerFirst.style.backgroundColor = "#b5b5b5";
// }
// playerSecond.onclick = (event) => {
//     playerFirst.style.backgroundColor = "white";
//     playerSecond.style.backgroundColor = "#b5b5b5";
// }
const diceButton = document.querySelector(".dice-button");
const position1 = document.querySelector(".player-0-position");
const position2 = document.querySelector(".player-1-position");
let player1rollsDice = true;
diceButton.onclick = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    if (player1rollsDice) {
        playerFirstSteps.innerHTML = "";
        playerFirstSteps.innerHTML = "Steps: " + random.toString();
        player1rollsDice = false;
        players[0].position += random;
        position1.innerHTML = "Position: " + players[0].position;
        console.log(players[0].position);
    }
    else {
        playerSecondSteps.innerHTML = "";
        playerSecondSteps.innerHTML = "Steps: " + random.toString();
        player1rollsDice = true;
        players[1].position += random;
        position2.innerHTML = "Position: " + players[1].position;
        console.log(players[1].position);
    }
};
const diceRoll = () => Math.floor(Math.random() * 6) + 1;
diceButton.onclick = (event) => {
    players.forEach((player, index) => {
        console.log(player);
        console.log(index);
        const playerPosition = player.position;
        const playerElement = document.querySelector(`.player-${index}`);
        const playerPositionElement = playerElement.querySelector(".player-position");
        const diceRollValue = diceRoll();
        player.position = playerPosition + diceRollValue;
        playerPositionElement.innerHTML = player.position.toString();
    });
};
