// klasy postaci----------------------------------------------------------------------------------------------------------------------------

// Charlote
const Charlote = new Fighter({
    position: {
     x:100,
     y:390
     },
     
     velocity: {
         x: 0,
         y: 10
     },
     offset: {
         x: 0,
         y: 0
     },
     imageSrc: './assets/Characters/Charlote the Knight Princess/Idle.png',
     framesMax: 11,
     scale: 2.5,
     offset: {
         x: 160,
         y: 130
     },
     sprites:{
         idle: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/Idle.png',
             framesMax: 11
           },
           idleR: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/IdleR.png',
             framesMax: 11
           },
           run: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/Run.png',
             framesMax: 8
           },
           runR: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/RunR.png',
             framesMax: 8
           },
           jump: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/Jump.png',
             framesMax: 3
           },
           jumpR: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/JumpR.png',
             framesMax: 3
           },
           fall: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/Fall.png',
             framesMax: 3
           },
           fallR: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/FallR.png',
             framesMax: 3
           },
           attack1: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/Attack1.png',
             framesMax: 7
           },
           attack1R: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/Attack1R.png',
             framesMax: 7
           },
           attack2: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/Attack2.png',
             framesMax: 7
           },
           attack2R: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/Attack2R.png',
             framesMax: 7
           },
           takeHit: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/Take Hit.png',
             framesMax: 4
           },
           takeHitR: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/Take HitR.png',
             framesMax: 4
           },
           death: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/Death.png',
             framesMax: 11
           },
           deathR: {
             imageSrc: './assets/Characters/Charlote the Knight Princess/DeathR.png',
             framesMax: 11
           }
     },
     attackBox: {
        offset:{
         x: 80,
         y: 0,
        }, 
        width: 120,
        height: 150,
     },
     attackBox1Rx: -40,
     attackBox1Lx: 50,
    })
Charlote.attackFrame = 4,
//hitbox
Charlote.width = 120
Charlote.height = 150
//Balans
Charlote.damage = 15
Charlote.defense = 0.45


//Find ----------------------------------------------------------------------
const Find = new Fighter({
    position: {
     x:800, 
     y:390
     },
     velocity: {
         x: 0,
         y: 0
     },
     offset: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/Characters/Find of the night/Idle.png',
    framesMax: 9,
    scale: 5,
    offset: {
        x: 120,
        y: 168
    }
    ,
    sprites:{
        idle: {
            imageSrc: './assets/Characters/Find of the night/Idle.png',
            framesMax: 9
          },
        idleR: {
            imageSrc: './assets/Characters/Find of the night/IdleR.png',
            framesMax: 9
          },
          run: {
            imageSrc: './assets/Characters/Find of the night/Run.png',
            framesMax: 6
          },
          runR: {
            imageSrc: './assets/Characters/Find of the night/RunR.png',
            framesMax: 6
          },
          jump: {
            imageSrc: './assets/Characters/Find of the night/Jump.png',
            framesMax: 4
          },
          jumpR: {
            imageSrc: './assets/Characters/Find of the night/JumpR.png',
            framesMax: 4
          },
          fall: {
            imageSrc: './assets/Characters/Find of the night/Jump.png',
            framesMax: 4
          },
          fallR: {
            imageSrc: './assets/Characters/Find of the night/JumpR.png',
            framesMax: 4
          },
          attack1: {
            imageSrc: './assets/Characters/Find of the night/Attack.png',
            framesMax: 12
          },
          attack1R: {
            imageSrc: './assets/Characters/Find of the night/AttackR.png',
            framesMax: 12
          },
          attack2: {
            imageSrc: './assets/Characters/Find of the night/Attack.png',
            framesMax: 12
          },
          attack2R: {
            imageSrc: './assets/Characters/Find of the night/AttackR.png',
            framesMax: 12
          },
          takeHit: {
            imageSrc: './assets/Characters/Find of the night/Hit.png',
            framesMax: 5
          },
          takeHitR: {
            imageSrc: './assets/Characters/Find of the night/HitR.png',
            framesMax: 5
          },
          death: {
            imageSrc: './assets/Characters/Find of the night/death.png',
            framesMax: 23
          },
          deathR: {
            imageSrc: './assets/Characters/Find of the night/deathR.png',
            framesMax: 23
          },
          
    },
    attackBox: {
        offset:{
         x: -90,
         y: -80,
        }, 
        width: 235,
        height: 250,
     },
     attackBox1Rx: -100,
     attackBox1Lx: 10,
 })
 //hitbox
 Find.attackFrame = 9,
 Find.height = 170 
 Find.width = 150
 //Balans
 Find.damage = 35
 Find.defense = 0.8






// Lost Hero------------------------------------
const LostHero = new Fighter({
    position: {
     x:800, 
     y:390
     },
     velocity: {
         x: 0,
         y: 0
     },
     offset: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/Characters/Lost Hero/Idle.png',
    framesMax: 9,
    scale: 3.5,
    offset: {
        x: 180,
        y: 65
    }
    ,
    sprites:{
        idle: {
            imageSrc: './assets/Characters/Lost Hero/Idle.png',
            framesMax: 8
          },
        idleR: {
            imageSrc: './assets/Characters/Lost Hero/IdleR.png',
            framesMax: 8
          },
          run: {
            imageSrc: './assets/Characters/Lost Hero/Run.png',
            framesMax: 8
          },
          runR: {
            imageSrc: './assets/Characters/Lost Hero/RunR.png',
            framesMax: 8
          },
          jump: {
            imageSrc: './assets/Characters/Lost Hero/Jump.png',
            framesMax: 1
          },
          jumpR: {
            imageSrc: './assets/Characters/Lost Hero/JumpR.png',
            framesMax: 1
          },
          fall: {
            imageSrc: './assets/Characters/Lost Hero/Fall.png',
            framesMax: 1
          },
          fallR: {
            imageSrc: './assets/Characters/Lost Hero/JumpR.png',
            framesMax: 1
          },
          attack1: {
            imageSrc: './assets/Characters/Lost Hero/Attack.png',
            framesMax: 6
          },
          attack1R: {
            imageSrc: './assets/Characters/Lost Hero/AttackR.png',
            framesMax: 6
          },
          attack2: {
            imageSrc: './assets/Characters/Lost Hero/Attack.png',
            framesMax: 6
          },
          attack2R: {
            imageSrc: './assets/Characters/Lost Hero/AttackR.png',
            framesMax: 6
          },
          takeHit: {
            imageSrc: './assets/Characters/Lost Hero/Hurt.png',
            framesMax: 3
          },
          takeHitR: {
            imageSrc: './assets/Characters/Lost Hero/HurtR.png',
            framesMax: 3
          },
          death: {
            imageSrc: './assets/Characters/Lost Hero/Death.png',
            framesMax: 4
          },
          deathR: {
            imageSrc: './assets/Characters/Lost Hero/DeathR.png',
            framesMax: 4
          },
          
    },
    attackBox: {
        offset:{
         x: -90,
         y: 10,
        }, 
        width: 185,
        height: 155,
     },
     attackBox1Rx: -100,
     attackBox1Lx: 10,
 })
 //hitbox
 LostHero.attackFrame = 3,
 LostHero.height = 170 
 LostHero.width = 90

//Balans
LostHero.damage = 15
LostHero.defense = 0.7
 

// Zartax the Wise------------------------------------
const Zartax = new Fighter({
    position: {
     x:800, 
     y:390
     },
     velocity: {
         x: 0,
         y: 0
     },
     offset: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/Characters/Zartax the Wise/Idle.png',
    framesMax: 6,
    scale: 1.7,
    offset: {
        x: 140,
        y: 84
    }
    ,
    sprites:{
        idle: {
            imageSrc: './assets/Characters/Zartax the Wise/Idle.png',
            framesMax: 6
          },
        idleR: {
            imageSrc: './assets/Characters/Zartax the Wise/IdleR.png',
            framesMax: 6
          },
          run: {
            imageSrc: './assets/Characters/Zartax the Wise/Run.png',
            framesMax: 8
          },
          runR: {
            imageSrc: './assets/Characters/Zartax the Wise/RunR.png',
            framesMax: 8
          },
          jump: {
            imageSrc: './assets/Characters/Zartax the Wise/Jump.png',
            framesMax: 2
          },
          jumpR: {
            imageSrc: './assets/Characters/Zartax the Wise/JumpR.png',
            framesMax: 2
          },
          fall: {
            imageSrc: './assets/Characters/Zartax the Wise/Fall.png',
            framesMax: 2
          },
          fallR: {
            imageSrc: './assets/Characters/Zartax the Wise/JumpR.png',
            framesMax: 2
          },
          attack1: {
            imageSrc: './assets/Characters/Zartax the Wise/Attack1.png',
            framesMax: 8
          },
          attack1R: {
            imageSrc: './assets/Characters/Zartax the Wise/Attack1R.png',
            framesMax: 8
          },
          attack2: {
            imageSrc: './assets/Characters/Zartax the Wise/Attack2.png',
            framesMax: 8
          },
          attack2R: {
            imageSrc: './assets/Characters/Zartax the Wise/Attack2R.png',
            framesMax: 8
          },
          takeHit: {
            imageSrc: './assets/Characters/Zartax the Wise/Hit.png',
            framesMax: 4
          },
          takeHitR: {
            imageSrc: './assets/Characters/Zartax the Wise/HitR.png',
            framesMax: 4
          },
          death: {
            imageSrc: './assets/Characters/Zartax the Wise/Death.png',
            framesMax: 7
          },
          deathR: {
            imageSrc: './assets/Characters/Zartax the Wise/DeathR.png',
            framesMax: 7
          },
          
    },
    attackBox: {
        offset:{
         x: -90,
         y: 10,
        }, 
        width: 225,
        height: 85,
     },
     attackBox1Rx: -120,
     attackBox1Lx: 10,
 })
 //hitbox
 Zartax.attackFrame = 6,
 Zartax.height = 170 
 Zartax.width = 120
 //Balans
 Zartax.damage = 40
 Zartax.defense = 1.5

// Darius  ---------------------------------------------------------------
const Darius = new Fighter({
    position: {
     x: 800, 
     y: 390
     },
     velocity: {
         x: 0,
         y: 0
     },
     offset: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/Characters/Darius/Idle.png',
    framesMax: 10,
    scale: 3.5,
    offset: {
        x: 250,
        y: 200
    }
    ,
    sprites:{
        idle: {
            imageSrc: './assets/Characters/Darius/Idle.png',
            framesMax: 10
          },
        idleR: {
            imageSrc: './assets/Characters/Darius/IdleR.png',
            framesMax: 10
          },
          run: {
            imageSrc: './assets/Characters/Darius/Run.png',
            framesMax: 8
          },
          runR: {
            imageSrc: './assets/Characters/Darius/RunR.png',
            framesMax: 8
          },
          jump: {
            imageSrc: './assets/Characters/Darius/Jump.png',
            framesMax: 3
          },
          jumpR: {
            imageSrc: './assets/Characters/Darius/JumpR.png',
            framesMax: 3
          },
          fall: {
            imageSrc: './assets/Characters/Darius/Fall.png',
            framesMax: 3
          },
          fallR: {
            imageSrc: './assets/Characters/Darius/JumpR.png',
            framesMax: 3
          },
          attack1: {
            imageSrc: './assets/Characters/Darius/Attack1.png',
            framesMax: 7
          },
          attack1R: {
            imageSrc: './assets/Characters/Darius/Attack1R.png',
            framesMax: 7
          },
          attack2: {
            imageSrc: './assets/Characters/Darius/Attack2.png',
            framesMax: 7
          },
          attack2R: {
            imageSrc: './assets/Characters/Darius/Attack2R.png',
            framesMax: 7
          },
          takeHit: {
            imageSrc: './assets/Characters/Darius/Take hit.png',
            framesMax: 3
          },
          takeHitR: {
            imageSrc: './assets/Characters/Darius/Take hitR.png',
            framesMax: 3
          },
          death: {
            imageSrc: './assets/Characters/Darius/Death.png',
            framesMax: 7
          },
          deathR: {
            imageSrc: './assets/Characters/Darius/DeathR.png',
            framesMax: 7
          },
          
    },
    attackBox: {
        offset:{
         x: -90,
         y: 10,
        }, 
        width: 200,
        height: 135,
     },
     attackBox1Rx: -140,
     attackBox1Lx: 10,
 })
 //hitbox
Darius.attackFrame = 5,
Darius.height = 170 
Darius.width = 90
//Balans
Darius.damage = 25
Darius.defense = 1
//McFit----------------------------------------
const McFit = new Fighter({
    position: {
     x: 800, 
     y: 390
     },
     velocity: {
         x: 0,
         y: 0
     },
     offset: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/Characters/McFit/Idle.png',
    framesMax: 10,
    scale: 3,
    offset: {
        x: 130,
        y: 90
    }
    ,
    sprites:{
        idle: {
            imageSrc: './assets/Characters/McFit/Idle.png',
            framesMax: 10
          },
        idleR: {
            imageSrc: './assets/Characters/McFit/IdleR.png',
            framesMax: 10
          },
          run: {
            imageSrc: './assets/Characters/McFit/Run.png',
            framesMax: 8
          },
          runR: {
            imageSrc: './assets/Characters/McFit/RunR.png',
            framesMax: 8
          },
          jump: {
            imageSrc: './assets/Characters/McFit/Going Up.png',
            framesMax: 3
          },
          jumpR: {
            imageSrc: './assets/Characters/McFit/Going UpR.png',
            framesMax: 3
          },
          fall: {
            imageSrc: './assets/Characters/McFit/Going Down.png',
            framesMax: 3
          },
          fallR: {
            imageSrc: './assets/Characters/McFit/Going DownR.png',
            framesMax: 3
          },
          attack1: {
            imageSrc: './assets/Characters/McFit/Attack1.png',
            framesMax: 7
          },
          attack1R: {
            imageSrc: './assets/Characters/McFit/Attack1R.png',
            framesMax: 7
          },
          attack2: {
            imageSrc: './assets/Characters/McFit/Attack2.png',
            framesMax: 7
          },
          attack2R: {
            imageSrc: './assets/Characters/McFit/Attack2R.png',
            framesMax: 7
          },
          takeHit: {
            imageSrc: './assets/Characters/McFit/Take hit.png',
            framesMax: 3
          },
          takeHitR: {
            imageSrc: './assets/Characters/McFit/Take hitR.png',
            framesMax: 3
          },
          death: {
            imageSrc: './assets/Characters/McFit/Death.png',
            framesMax: 11
          },
          deathR: {
            imageSrc: './assets/Characters/McFit/DeathR.png',
            framesMax: 11
          },
          
    },
    attackBox: {
        offset:{
         x: -90,
         y: -80,
        }, 
        width: 210,
        height: 225,
     },
     attackBox1Rx: -130,
     attackBox1Lx: 30,
 })
 //hitbox
McFit.attackFrame = 5,
McFit.height = 170 
McFit.width = 140
//Balans
McFit.damage = 30
McFit.defense = 1.2