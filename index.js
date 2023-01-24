//parmetryzacja okna gry i kontekstu dwuwymiaroweego
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576
c.fillRect(0, 0, canvas.width, canvas.height)

//ustawienie grawitacji
const graviti = 0.6

// Tła
var backgrounds = ['./assets/background/BG1.png','./assets/background/BG2.png','./assets/background/BG3.png','./assets/background/BG4.png','./assets/background/BG5.png']

var backround1 = new Sprite({
    position: {
        x:0,
        y:0
    },
    imageSrc: backgrounds[0]
})

var backround2 = new Sprite({
    position: {
        x:0,
        y:0
    },
    imageSrc: backgrounds[1]
})
var backround3 = new Sprite({
    position: {
        x:0,
        y:0
    },
    imageSrc: backgrounds[2]
})
var backround4 = new Sprite({
    position: {
        x:0,
        y:0
    },
    imageSrc: backgrounds[3]
})
var backround5 = new Sprite({
    position: {
        x:0,
        y:0
    },
    imageSrc: backgrounds[4]
})

var backround = backround1


// Zwierzęta w tle

const rat = new Sprite({
    position: {
        x:820,
        y:198
    },
    imageSrc: './assets/Rat.png',
    scale: 1.3,
    framesMax: 4,
})

const cat = new Sprite({
    position: {
        x: 10,
        y: 350
    },
    imageSrc: './assets/Cat.png',
    scale: 1.8,
    framesMax: 4,
})

const bird = new Sprite({
    position: {
        x:415,
        y:335
    },
    imageSrc: './assets/Bird.png',
    scale: 1.3,
    framesMax: 4,
})

const dog = new Sprite({
    position: {
        x:920,
        y:430
    },
    imageSrc: './assets/Dog.png',
    scale: 2,
    framesMax: 4,
})

const mice = new Sprite({
    position: {
        x: 25,
        y: 415
    },
    imageSrc: './assets/mice.png',
    scale: 1.3,
    framesMax: 4,
})
var animals = [rat, cat, dog, bird, mice]
var drawnAnimal = animals[4]

//Wybor tła i dodatku, losowy dla każdej gry
let scenery = Math.floor(Math.random() * 5)
switch (scenery) {
    case 0:
        backround = backround1
        drawnAnimal = animals[0]
        break;
    case 1:
        backround = backround2
        drawnAnimal = animals[1]
        break;
    case 2:
        backround = backround3
        drawnAnimal = animals[2]
        break;
    case 3:
        backround = backround4
        drawnAnimal = animals[3]
        break;
    case 4:
        backround = backround5
        drawnAnimal = animals[4]
        break;

}

// Pobieranie wybranych postaci z menu

var player1Character = localStorage.getItem('playerCharacter')
var player2Character = localStorage.getItem('enemyCharacter')


//Utworzenie graczy z wybranych postaci
//Dane postaci pobierane są z osobnego pliku characters.js
var characters =[Charlote, Find, LostHero, Zartax, Darius, McFit];
var player = characters[player1Character]
var enemy = characters[player2Character]
player.position.x = 100
enemy.position.x = 800


// Zestaw klawiszy
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowRight: {
        pressd: false
    },
    ArrowLeft: {
        pressd: false
    }
}


// wywołanie czasu
countTimer()

// animacja okna gry
function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0,0, canvas.width, canvas.height)
    backround.update()
    drawnAnimal.update()
    c.fillStyle = 'rgba(255, 255, 255, 0.1)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
    checkSide({
        player1: player,
        player2: enemy})

    player.velocity.x = 0
    enemy.velocity.x = 0

    
    //ruchy gracza 1
    if (player.velocity.y < 0){
        swithSpriteDirection(
            {player: player},
            'jump'
        )
        if (keys.a.pressed && player.lastKey === "a") {
            if(player.position.x > 0-(player.width/2))
            player.velocity.x = -5}
            else if (keys.d.pressed && player.lastKey === "d") {
                if(player.position.x < 1024-(player.width/2)) //ogranicznie maksymalnego ruchu
                player.velocity.x = 5
            }
    } else if (player.velocity.y > 0){
        swithSpriteDirection(
            {player: player},
            'fall'
        )
        if (keys.a.pressed && player.lastKey === "a") {
            if(player.position.x > 0-(player.width/2))
            player.velocity.x = -5}
            else if (keys.d.pressed && player.lastKey === "d") {
                if(player.position.x < 1024-(player.width/2))
                player.velocity.x = 5
            }
    } else if (keys.a.pressed && player.lastKey === "a") {
        if(player.position.x > 0-(player.width/2))
        player.velocity.x = -5
        swithSpriteDirection(
            {player: player},
            'run'
        )
    } else if (keys.d.pressed && player.lastKey === "d") {
        if(player.position.x < 1024-(player.width/2))
        player.velocity.x = 5
        swithSpriteDirection(
            {player: player},
            'run'
        )
    } else {
        swithSpriteDirection(
            {player: player},
            'idle'
        )
    }

   

    //ruchy gracza 2
    if (enemy.velocity.y < 0){
        swithSpriteDirection(
            {player: enemy},
            'jump'
        )
        if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
            if(enemy.position.x > 0-(enemy.width/2))
            enemy.velocity.x = -5}
            else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
                if(enemy.position.x < 1024-(enemy.width/2))
                enemy.velocity.x = 5
            }
    } else if (enemy.velocity.y > 0){
        swithSpriteDirection(
            {player: enemy},
            'fall'
        )
        if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
            if(enemy.position.x > 0-(enemy.width/2))
            enemy.velocity.x = -5}
            else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
                if(enemy.position.x < 1024-(enemy.width/2))
                enemy.velocity.x = 5
            }
    } else if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
        if(enemy.position.x > 0-(enemy.width/2))
        enemy.velocity.x = -5
        swithSpriteDirection(
            {player: enemy},
            'run'
        )
    } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
        if(enemy.position.x < 1024-(enemy.width/2))
        enemy.velocity.x = 5
        swithSpriteDirection(
            {player: enemy},
            'run'
        )
    } else {
        swithSpriteDirection(
            {player: enemy},
            'idle'
        )

    }

    //sprawdzanie kolizji ataku gracz
    if(
        hitboxColision({
            hitbox1: player,
            hitbox2: enemy
        })
        && player.isAttacking && player.framesCurrent === player.attackFrame
        && player.health > 0
        && player.framesElapsed > (enemy.damageFrame+30)){
            enemy.takeHit(player.damage)
            player.isAttacking = false
            if(enemy.health < 0){
                enemy.health = 0
            }
            document.querySelector('#enemyHealth').style.width = enemy.health + '%'
    }

    //sprawdznie nietrafionego ataku gracza
    if (player.isAttacking && player.framesCurrent === player.attackFrame) {
        player.isAttacking = false
      }

    // sprawdzanie kolizji ataku przeciwnika
    if(
        hitboxColision({
            hitbox1: enemy,
            hitbox2: player
        })
        && enemy.isAttacking && enemy.framesCurrent === enemy.attackFrame
        && enemy.health > 0
        && enemy.framesElapsed > (player.damageFrame+30)){
            enemy.isAttacking = false
            player.takeHit(enemy.damage)
            if(player.health < 0){
                player.health = 0
            }
            document.querySelector('#playerHealth').style.width = player.health + '%'
            console.log('Enemy hit')
    }
    //sprawdznie nietrafionego ataku przeciwnika
    if (enemy.isAttacking && enemy.framesCurrent === enemy.attackFrame) {
        enemy.isAttacking = false
      }

    // sprawdzanie warunku zakończenia gry na podstawie życia graczy
    if ( enemy.health <= 0 || player.health <= 0){
        determineWinner({player, enemy, timerId})
    }
}

animate()

//obsługa zdarzeń klawiszy
window.addEventListener('keydown', (event) => {
    if (!player.dead){
       switch (event.key) {
        case 'd':
            keys.d.pressed = true
            player.lastKey = 'd'
            break
        case 'a':
            keys.a.pressed = true
            player.lastKey = 'a'
            break
        case 'w':
            if(player.velocity.y===0)
                player.velocity.y = -19

            break
        case 'e':
            player.attack()
            break
    } 
    }
    
    if (!enemy.dead){
        switch (event.key) {       
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            enemy.lastKey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            enemy.lastKey = "ArrowLeft"
            break
        case 'ArrowUp':
            if(enemy.velocity.y === 0)
            enemy.velocity.y = -19
            break
        case '0':
            enemy.attack()
            break
    }
}
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
    }
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
    }
})

//funkcje klawiszy powrotu do menu i rewanrzu
document.getElementById('buttonRematch').onclick = function() {buttonRematch()}
function buttonRematch() {
    window.location.href='index.html';
}

document.getElementById('buttonMenu').onclick = function() {buttonMenu()}
function buttonMenu() {
    window.location.href='menu.html';
}