// funkcja sprawdzjąca kolizje między dwoma hitboxami
function hitboxColision({hitbox1, hitbox2}){
    return(
        hitbox1.attackBox.position.x + hitbox1.attackBox.width >= hitbox2.position.x
        && hitbox1.attackBox.position.x <= hitbox2.position.x + hitbox2.width 
        && hitbox1.attackBox.position.y + hitbox1.attackBox.height >= hitbox2.position.y
        && hitbox1.attackBox.position.y <= hitbox2.position.y + hitbox2.height
    )
}

// funkcja deternująca rezultat zakończonej gry
function determineWinner({player, enemy, timerId}){
    clearTimeout(timerId)
    document.getElementById('buttons').style.display ='flex'
    document.querySelector('#dispResult').style.display ='flex'
    
    if (player.health === enemy.health){
        document.querySelector('#dispResult').innerHTML = 'Tie'
    } else if (player.health > enemy.health){
        document.querySelector('#dispResult').innerHTML = 'Player 1 WINS'
    } else {
        document.querySelector('#dispResult').innerHTML = 'Player 2 WINS'
    }
}
// Ustawienie warunku czasowego maksymalnej długości trwanina meczu
let timer = 60
let timerId
function countTimer(){
    if ( timer === 0){
        determineWinner({player, enemy, timerId})
    }
    if (timer > 0) {
        timerId = setTimeout(countTimer, 1000)
        timer--
        document.querySelector("#timer").innerHTML = timer        
    }
}

//Funkcja sprawdzamia po której stronie areny znajdują się gracze aby byli zawsze odwróceni twarzą do siebie
function checkSide({player1, player2}){
    if((player1.position.x + ( player1.image.width * player1.scale / player1.framesMax)/2)<
        (player2.position.x + ( player2.image.width * player2.scale / player2.framesMax)/2))
        {
            player2.side = 1
            player2.attackBox.offset.x = player2.attackBox1Rx
            player1.side = 0
            player1.attackBox.offset.x = player1.attackBox1Lx
        } else {
            player2.side = 0
            player2.attackBox.offset.x = player2.attackBox1Lx
            player1.side = 1
            player1.attackBox.offset.x = player1.attackBox1Rx
        }
}

//Funkcja zmieniająca animację postaci w zalerzności od podjętej akcji
function swithSpriteDirection({player}, przypadek){
    let nowyPrzypadek = przypadek
    if(player.side === 1){
        nowyPrzypadek = nowyPrzypadek + 'R'
        player.switchSprite(nowyPrzypadek)
    } else {
        player.switchSprite(nowyPrzypadek)
    }
}

//Funkcja zmienijąca tło i dodatki tła
function switchBackground(backgroundNbr, animalNbr){
    backround.imageSrc = backgrounds[backgroundNbr]
    drawnAnimal = animals[animalNbr]
}