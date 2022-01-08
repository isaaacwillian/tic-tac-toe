let square = document.getElementsByClassName("square");
let winner = document.getElementById("winner");
let main = document.getElementsByTagName("main")[0];
let squares = document.querySelectorAll(".square");
let playersName = document.querySelectorAll("input");
let buttonStart = document.getElementById('play');
let arraySquare = new Array(9);
let player = true;
let vscomputer = false;
let player1, player2;

buttonStart.addEventListener('click', () => {
    if (playersName[0].validity.valid && playersName[1].validity.valid) {
    } else {
        console.log("pode não")
    }
})
for (squa of squares) {
    squa.addEventListener('click', clique);
    squa.addEventListener('mouseover', over);
    squa.addEventListener('mouseleave', leave);
}

const play = () => {
    if (playersName[0].value != '' && playersName[1].value != '') {
        player1 = playersName[0].value;
        player2 = playersName[1].value;
        let names = document.getElementsByTagName("footer")[0].children;
        names[0].innerText = player1 + ": 0";
        names[1].innerText = player2 + ": 0";
        document.getElementById("start").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("start").style.zIndex = "-1";
        }, 1200);
    } else {
        playersName.forEach(element => {
            element.classList.add('validate');
        });
    }
}
function findElement(element) {
    if (element.target.children[0] == undefined) {
        return element.target.parentElement;
    } else {
        return element.target;
    }
}
function clique(element) {
    element = findElement(element);
    let index = Number(element.id);
    if (arraySquare[index] == undefined) {
        if (player) {
            arraySquare[index] = 1;
            element.children[0].style.color = "white";
        } else {
            arraySquare[index] = 2;
            element.children[0].style.borderColor = "white";
        }
    } else {
        return;
    }
    for (let i = 0; i < 3; i++) {

        if (arraySquare[i * 3] == arraySquare[i * 3 + 1] && arraySquare[i * 3] == arraySquare[i * 3 + 2] && arraySquare[i * 3] != undefined) {
            square[i * 3].classList.add("winn");              //Vertical
            square[i * 3 + 1].classList.add("winn");
            square[i * 3 + 2].classList.add("winn");
            won(arraySquare[i * 3]);
            return;
        }
        if (arraySquare[i] == arraySquare[i + 3] && arraySquare[i] == arraySquare[i + 6] && arraySquare[i] != undefined) {
            square[i].classList.add("winn");           //Horizontal
            square[i + 3].classList.add("winn");
            square[i + 6].classList.add("winn");
            won(arraySquare[i]);
            return;
        }
        if (arraySquare[i] == arraySquare[4] && arraySquare[i] == arraySquare[i + 8 + (-i * 2)] && arraySquare[i] != undefined) {
            square[i].classList.add("winn");                  //Diagonais
            square[4].classList.add("winn");
            square[i + 8 + (-i * 2)].classList.add("winn");
            won(arraySquare[i]);
            return;
        }
    }
    let cont = 0;
    arraySquare.forEach(element => {
        if (element) {
            cont++
        }
    });
    if (cont == 9) {
        winner.innerText = `Deu velha`;
        winner.style.opacity = "1";
        winner.style.zIndex = "1";
    }
    player = !player;
}

function over(element) {
    element = findElement(element);
    if (arraySquare[Number(element.id)] == undefined) {
        if (player) {
            element.children[0].classList.add("x");
        } else {
            element.children[0].classList.add("o")
        }
    }
}

function leave(element) {
    element = findElement(element);
    if (arraySquare[Number(element.id)] == undefined) {
        element.children[0].classList.remove("x", "o");
    }
}

const won = i => {
    let playerWin;
    if (i == 1) {
        playerWin = player1;
    } else {
        playerWin = player2;
    }
    winner.innerText = `${playerWin} venceu`;
    winner.style.opacity = "1";
    winner.style.zIndex = "1";
    main.classList.add('win');
    main.children[0].style.zIndex = "-1";
    return;
}

const players = element => {
    element.parentElement.style.display = "none";
    document.getElementById("startplayers").style.display = "inline-block";
}
function computer(element) {
    element.parentElement.style.display = "none";
    document.getElementById("chooseLevel").style.display = "flex";
}