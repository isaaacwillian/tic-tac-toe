let ul = document.getElementById("ul");
let square = document.getElementsByClassName("square");
let winner = document.getElementById("winner");
let main = document.getElementsByTagName("main")[0];
let arraySquare = new Array(9);
let player = true;
clique = (indexx) => {
    let index = Number(indexx.innerText);
    let winn = false;
    if (arraySquare[index] == undefined) {
        if (player) {
            arraySquare[index] = 1;
        } else {
            arraySquare[index] = 2;
        }
    } else {
        return;
    }
    for (let i = 0; i < 3; i++) {

        if (arraySquare[i * 3] == arraySquare[i * 3 + 1] && arraySquare[i * 3] == arraySquare[i * 3 + 2] && arraySquare[i * 3] != undefined) { //Vertical
            winn = true;
            console.log("1")
        }
        if (arraySquare[i] == arraySquare[i + 3] && arraySquare[i] == arraySquare[i + 6] && arraySquare[i] != undefined) { //Horizontal
            winn = true;
            console.log("2")
        }
        if (arraySquare[i] == arraySquare[4] && arraySquare[i] == arraySquare[i + 8 + (-i * 2)] && arraySquare[i] != undefined) {
            winn = true;
            console.log("3")
        }

        if (winn) {
            winner.innerText = `Jogador ${arraySquare[i]} Venceu`;
            winner.style.opacity = "1";
            winner.style.zIndex = "1";
            main.classList.add('win');
            console.log(arraySquare);
            return;
        }
    }
    player = !player;
}

over = (indexx) => {
    if (arraySquare[Number(indexx.innerText)] == undefined) {
        if (player) {
            indexx.children[0].classList.add("x");
            indexx.children[1].classList.add("xx");
        } else {
            indexx.children[0].classList.add("o")
        }
    }
}

leave = (indexx) => {
    if (arraySquare[Number(indexx.innerText)] == undefined) {
        indexx.children[0].classList.remove("x", "o");
        indexx.children[1].classList.remove("xx");
    }
}