//Klasa główna obiektu graficznego
class Sprite {
    constructor({position, imageSrc, scale = 1, framesMax = 1, offset = {x: 0, y: 0}}) {
        this.position = position 
        this.width = 50
        this.height = 150
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 11
        this.offset = offset
        }
    
    //metoda rysowania obiektów
    draw(){
        c.save();
        c.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            (this.position.x)-(this.offset.x), 
            this.position.y - this.offset.y, 
            this.image.width * this.scale / this.framesMax,
            this.image.height * this.scale,
            )
        c.restore()
    }

    //metoda animacji poklatkowej
    animateFrames() {
        this.framesElapsed++
        if (this.framesElapsed % this.framesHold === 0) {
          if (this.framesCurrent < this.framesMax - 1) {
            this.framesCurrent++
          } else {
            this.framesCurrent = 0
          }
        }
      }

    //odświerzanie grafik
    update(){
        this.draw()
        this.animateFrames()
        }
}

//Klasa postaci
class Fighter extends Sprite{
    constructor({
        position, 
        velocity, 
        color = 'red', 
        imageSrc, 
        scale = 1, 
        framesMax = 1,
        offset = {x: 0, y: 0},
        sprites,
        attackBox = {offset: {}, widht: undefined, height: undefined},
        attackBox2 = {offset: {}, widht: undefined, height: undefined},
        attackBox1Rx = undefined,
        attackBox1Lx = undefined,
    }) {
        super({
            imageSrc,
            scale,
            framesMax,
            position,
            offset,
        })

        //włąsciwości postaci
        this.velocity = velocity
        this.width
        this.height
        this.lastKey
        this.attackBox = {
            position: {
              x: this.position.x,
              y: this.position.y
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height
          }
        this.attackBox2 = {
            position: {
              x: this.position.x,
              y: this.position.y  
            },
            offset: attackBox2.offset,
            width: attackBox2.widht,
            height: attackBox2.height
        }
        this.color = color
        this.isAttacking
        this.health = 100
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 8
        this.sprites = sprites
        this.dead = false
        this.side = 0
        this.attackBox1Rx = attackBox1Rx
        this.attackBox1Lx = attackBox1Lx
        this.attackFrame = 0
        this.damage = 20
        this.defense = 1
        this.damageFrame = 0
        for (const sprite in this.sprites){
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }

        
    }
    update(){
        this.draw()
        if (!this.dead) this.animateFrames()

        this.attackBox.position.x = (this.position.x + this.attackBox.offset.x)
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y


        /*Rysownie hitbox attaku 
        c.fillStyle = "rgba(255, 255, 255, 0.5)"
    c.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
    )
    c.fillStyle = "rgba(255, 255, 255, 0.5)"
    // rysownie hitboxa postaci
    c.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height,
    )
    c.fillStyle = "rgba(255, 255, 255, 0.5)"
   */

//przemieszczanie grafik po ekranie
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y >= canvas.height-30){
            this.velocity.y = 0
            this.position.y = 396.3
        }else
            this.velocity.y += graviti
        
    }

//Metoda taku
    attack() {
        swithSpriteDirection(
            {player: this},
            'attack1'
        )
        this.isAttacking = true
    }
//Metoda otrzymywanina trafienia
    takeHit(damage){
       this.health -= (this.defense*damage)
       this.damageFrame = this.framesElapsed
       if (this.health <= 0){
        swithSpriteDirection(
            {player: this},
            'death'
        )
        this.lastKey = null;
        this.velocity.x = 0;
       } else {
        swithSpriteDirection(
            {player: this},
            'takeHit'
        )
       }
    }

    switchSprite(sprite) {
        //nadpisywanie animacji śmierci nad wszystkie inne
            //animacja śmierci postać obrócona w lewo
        if (this.image === this.sprites.death.image) {
          if (this.framesCurrent === this.sprites.death.framesMax - 1)
            this.dead = true
        
          return
        }
        if (
            this.image === this.sprites.death.image &&
            this.framesCurrent < this.sprites.death.framesMax - 1
        )
        return
            //animacja śmierci postaci obrócona w prawo
        if (this.image === this.sprites.deathR.image) {
            if (this.framesCurrent === this.sprites.deathR.framesMax - 1)
              this.dead = true
          
            return
          }
          if (
              this.image === this.sprites.deathR.image &&
              this.framesCurrent < this.sprites.deathR.framesMax - 1
          )
          return
    
         // nadpisywanie innych animacji przez animację atkau 2 w lewo
        if (
            this.image === this.sprites.attack2.image &&
            this.health > 0 &&
            this.framesCurrent < this.sprites.attack2.framesMax - 1
        )
        return
         // nadpisywanie innych animacji przez animację atkau 2 w prawo
         if (
            this.image === this.sprites.attack2R.image &&
            this.health > 0 &&
            this.framesCurrent < this.sprites.attack2R.framesMax - 1
        )
        return
        
        // nadpisywanie innych animacji przez animację atkau 1 w lewo
        if (

          this.image === this.sprites.attack1.image &&
          this.health > 0 &&
          this.framesCurrent < this.sprites.attack1.framesMax - 1
        )
        return

        // nadpisywanie innych animacji przez animację atkau 1 w prawo
        if (

            this.image === this.sprites.attack1R.image &&
            this.health > 0 &&
            this.framesCurrent < this.sprites.attack1R.framesMax - 1
          )
          return
    
        // napisywanie innych animacji przez animację otrzymania obrażeń lewo
        if (
          this.image === this.sprites.takeHit.image &&
          this.framesCurrent < this.sprites.takeHit.framesMax - 1
        )
          return

        // napisywanie innych animacji przez animację otrzymania obrażeń prawo
        if (
            this.image === this.sprites.takeHitR.image &&
            this.framesCurrent < this.sprites.takeHitR.framesMax - 1
          )
            return          
        // zmiana spritów animacji
        switch (sprite) {
          case 'idle': // Lewo
            if (this.image !== this.sprites.idle.image) {
              this.image = this.sprites.idle.image
              this.framesMax = this.sprites.idle.framesMax
              this.framesCurrent = 0
            }
            break
          case 'idleR': //Prawo
            if (this.image !== this.sprites.idleR.image) {
                this.image = this.sprites.idleR.image
                this.framesMax = this.sprites.idleR.framesMax
                this.framesCurrent = 0
            }
            break

          case 'run': //Lewo
            if (this.image !== this.sprites.run.image) {
              this.image = this.sprites.run.image
              this.framesMax = this.sprites.run.framesMax
              this.framesCurrent = 0
            }
            break
            case 'runR': //Prawo
                if (this.image !== this.sprites.runR.image) {
                  this.image = this.sprites.runR.image
                  this.framesMax = this.sprites.runR.framesMax
                  this.framesCurrent = 0
                }
                break

        case 'jump': // Lewo
            if (this.image !== this.sprites.jump.image) {
              this.image = this.sprites.jump.image
              this.framesMax = this.sprites.jump.framesMax
              this.framesCurrent = 0
            }
            break
        case 'jumpR': // Prawo
            if (this.image !== this.sprites.jumpR.image) {
              this.image = this.sprites.jumpR.image
              this.framesMax = this.sprites.jumpR.framesMax
              this.framesCurrent = 0
            }
            break
    
        case 'fall': // Lewo
            if (this.image !== this.sprites.fall.image) {
              this.image = this.sprites.fall.image
              this.framesMax = this.sprites.fall.framesMax
              this.framesCurrent = 0
            }
            break
        case 'fallR': // Prawo
            if (this.image !== this.sprites.fallR.image) {
              this.image = this.sprites.fallR.image
              this.framesMax = this.sprites.fallR.framesMax
              this.framesCurrent = 0
            }
            break   

        case 'attack1': // Lewo
            if (this.image !== this.sprites.attack1.image) {
              this.image = this.sprites.attack1.image
              this.framesMax = this.sprites.attack1.framesMax
              this.framesCurrent = 0
            }
            break
        case 'attack1R': // Prawo
            if (this.image !== this.sprites.attack1R.image) {
              this.image = this.sprites.attack1R.image
              this.framesMax = this.sprites.attack1R.framesMax
              this.framesCurrent = 0
            }
            break

        case 'attack2': // Lewo
            if (this.image !== this.sprites.attack2.image) {
                this.image = this.sprites.attack2.image
                this.framesMax = this.sprites.attack2.framesMax
                this.framesCurrent = 0
            }
            break
        case 'attack2R': // Prawo
            if (this.image !== this.sprites.attack2R.image) {
                this.image = this.sprites.attack2R.image
                this.framesMax = this.sprites.attack2R.framesMax
                this.framesCurrent = 0
            }
            break
    
        case 'takeHit': // Lewo
            if (this.image !== this.sprites.takeHit.image) {
              this.image = this.sprites.takeHit.image
              this.framesMax = this.sprites.takeHit.framesMax
              this.framesCurrent = 0
            }
            break
        case 'takeHitR': // Prawo
            if (this.image !== this.sprites.takeHitR.image) {
              this.image = this.sprites.takeHitR.image
              this.framesMax = this.sprites.takeHitR.framesMax
              this.framesCurrent = 0
            }
            break

          case 'death': // Lewo
            if (this.image !== this.sprites.death.image) {
              this.image = this.sprites.death.image
              this.framesMax = this.sprites.death.framesMax
              this.framesCurrent = 0
            }
            break
        case 'deathR': // Prawo
            if (this.image !== this.sprites.deathR.image) {
              this.image = this.sprites.deathR.image
              this.framesMax = this.sprites.deathR.framesMax
              this.framesCurrent = 0
            }
            break
        }
      }

}

