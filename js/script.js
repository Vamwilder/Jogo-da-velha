// Importando todos os elementos
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p ");
let secondPlayer;

// contador de jogadas
// A primeira jogada sempre será do X
let player1 = 0;
let player2 = 0;


// adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {
    // Quando alguem clica na caixa
    boxes[i].addEventListener("click", function() {         // Vai escutar quando clicarmos na caixa
        
        let el = checkEl(player1, player2);                 // Declarando o Elemento

        if(this.childNodes.length == 0) {                   // Verifica se este boxes, tem elementos filhos
            // Clonando o elemento da variavel para não perdermos ela
            let cloneEl = el.cloneNode(true);                   
            this.appendChild(cloneEl);                       // Inserindo o elemento na tela, this.boxes[i]
            // boxes[i].appendChild(cloneEl);                // Das duas formas funcionam

            // Computador jogadas
            if(player1 == player2) {
                player1++;

                if(secondPlayer == "IA-players") {
                    // Função executar a jogada
                    computerPlay();
                    player2++;
                }
            } else {
                player2++;
            }

            // Checa quem venceu
            checkWinCondition();
        }
    })
}

// Evento para saber se é 2 Player ou IA
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute("id");

        for(let j=0; j<buttons.length; j++) {
            buttons[j].style.display = "none";
        }

        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide"); 
        }, 500)
    })
}

// Verifica quem vai jogar
function checkEl(player1, player2) {
    if(player1 == player2) {                            // Caso seja a primeira jogada, vai armazenar o x
        // x
        el = x;
    } else {                                            // Caso não seja a primeira jogada, irá armazenar a o
        // o
        el = o;
    }
    return el;
}

// Ve quem ganhou
function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // Horizontal
    // 1
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
            // Deu x
            declaraWinner("x");
        } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
            // deu o
            declaraWinner("o");
        }
    }
    // 2
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
            // Deu x
            declaraWinner("x");
        } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
            // deu o
            declaraWinner("o");
        }
    }
    // 3
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
            // Deu x
            declaraWinner("x");
        } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
            // deu o
            declaraWinner("o");
        }
    }
    // Vertical
    //1
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
            // Deu x
            declaraWinner("x");
        } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
            // deu o
            declaraWinner("o");
        }
    }
    // 2
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
            // Deu x
            declaraWinner("x");
        } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
            // deu o
            declaraWinner("o");
        }
    }
    // 3
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
            // Deu x
            declaraWinner("x");
        } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
            // deu o
            declaraWinner("o");
        }
    }
    // Transversal
    // 1
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
            // Deu x
            declaraWinner("x");
        } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
            // deu o
            declaraWinner("o");
        }
    }
    // 2
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
            // Deu x
            declaraWinner("x");
        } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
            // deu o
            declaraWinner("o");
        }
    }

    // Deu velha
    let counter = 0;
    for (let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter ++;
        }
    }

    if (counter == 9) {
        declaraWinner("Deu velha");
    }
}

// Limpa o jogo, declara o vencedor e atualiza o placar

function declaraWinner(winner) {
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = "";
    
    if (winner == "x") {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) +1;
        msg = "O jogador 1 venceu!";
    } else if (winner == "o") {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) +1;
        msg = "O jogador 2 venceu!";
    } else {
        msg = "Deu velha!";
    }

    // Exibe msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // Esconde msg
    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 3000)

    // Zera as jogadas
    player1 = 0;
    player2 = 0;

    // Remove x e o
    let boxesToRemove = document.querySelectorAll(".box div");
    
    for (let i=0; i<boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

// Executar a lógica do CPU
function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    preenchidas = 0;

    for (let i=0; i<boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);           

        // Só preencher se o filho estiver o vazio
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1 ){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        } else {                        // Marca o boxe[preenchida], se ja foi pelo player 1
            preenchidas++;
        }

    }

    // Inicia de volta, caso não tenha marcado nenhuma e o jogo não tenha acabado
    if(counter == 0 && preenchidas <9) {
        computerPlay();
    }
}