let square = document.getElementsByClassName("square");
let winner = document.getElementById("winner");
let main = document.getElementsByTagName("main")[0];
let arraySquare = new Array(9);
let player = true;
let squares = document.querySelectorAll(".square");
let playersName = document.querySelectorAll("input");
let player1, player2;
for (squa of squares) {
    squa.addEventListener('click', clique);
}
play = () => {
    player1 = playersName[0].value;
    player2 = playersName[1].value;
    let names = document.getElementsByTagName("footer")[0].children;
    names[0].innerText = player1 + ": 0";
    names[1].innerText = player2 + ": 0";
    document.getElementById("start").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("start").style.zIndex = "-1";
    }, 1000);
}
function clique(element) {
    if (element.target.children[0] == undefined) {
        element = element.target.parentElement;
    } else {
        element = element.target;
    }
    let index = Number(element.id);
    if (arraySquare[index] == undefined) {
        if (player) {
            arraySquare[index] = 1;
            element.children[0].style.background = "white";
            element.children[1].style.background = "white";
        } else {
            arraySquare[index] = 2;
            element.children[0].style.borderColor = "white";
        }
    } else {
        return;
    }
    for (let i = 0; i < 3; i++) {

        if (arraySquare[i * 3] == arraySquare[i * 3 + 1] && arraySquare[i * 3] == arraySquare[i * 3 + 2] && arraySquare[i * 3] != undefined) {                        //Vertical
            square[i * 3].classList.add("winn");
            square[i * 3 + 1].classList.add("winn");
            square[i * 3 + 2].classList.add("winn");
            won(arraySquare[i * 3]);
        }
        if (arraySquare[i] == arraySquare[i + 3] && arraySquare[i] == arraySquare[i + 6] && arraySquare[i] != undefined) {                        //Horizontal
            square[i].classList.add("winn");
            square[i + 3].classList.add("winn");
            square[i + 6].classList.add("winn");
            won(arraySquare[i]);
        }
        if (arraySquare[i] == arraySquare[4] && arraySquare[i] == arraySquare[i + 8 + (-i * 2)] && arraySquare[i] != undefined) {                       //Diagonais
            square[i].classList.add("winn");
            square[4].classList.add("winn");
            square[i + 8 + (-i * 2)].classList.add("winn");
            won(arraySquare[i]);
        }
    }
    player = !player;
}

over = element => {
    if (arraySquare[Number(element.id)] == undefined) {
        if (player) {
            element.children[0].classList.add("x");
            element.children[1].classList.add("xx");
        } else {
            element.children[0].classList.add("o")
        }
    }
}

leave = element => {
    if (arraySquare[Number(element.id)] == undefined) {
        element.children[0].classList.remove("x", "o");
        element.children[1].classList.remove("xx");
    }
}
won = i => {
    let playerWin;
    if (i == 1) {
        playerWin = player1;
    } else {
        playerWin = player2;
    }
    winner.innerText = `Jogador ${playerWin} venceu`;
    winner.style.opacity = "1";
    winner.style.zIndex = "1";
    main.classList.add('win');
    console.log(arraySquare);
    main.children[0].style.zIndex = "-1";
    return;
}
players = element => {
    element.parentElement.style.display = "none";
    document.getElementById("startplayers").style.display = "inline-block";
}