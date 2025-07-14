// var player1Hp = 100
// const player1Atk = 20

// var player2Hp = 100
// const player2Atk = 20

// var player2Hp = 100
// const player2Atk = 20

// var enemy1Hp = 80
// const enemy1Atk = 15

// var enemy1Hp = 80
// const enemy1Atk = 15
// var enemy1Hp = 80

// const enemy1Atk = 15
// var enemy1Hp = 80

// const enemy1Atk = 15
// var enemy1Hp = 80

// const enemy1Atk = 15
// var enemy1Hp = 80
// const enemy1Atk = 15

// const enemy1Atk = 15
// var enemy1Hp = 80
// const enemy1Atk = 15

// // simulate the player attacking the enemy
// enemy1Hp = enemy1Hp - player1Atk;
// console.log('enemy1 has taken a hit. their hp now is', enemy1Hp)
// // simulate the player attacking the enemy
// enemy1Hp = enemy1Hp - player1Atk;
// console.log('enemy1 has taken a hit. their hp now is', enemy1Hp)

// // simulate the enemy attacking the player
// player1Hp = player1Hp - enemy1Atk;
// console.log('player1Hp has taken a hit. their hp now is', player1Hp)

class Player {
    constructor(name, hp, atk) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.awards = [];
    }

    takeHit(enemy) {
        if (this.isDead()) {
            console.log(`Player ${this.name} is already dead`)
            return;
        }
        this.hp = this.hp - enemy.atk;
        if (this.isDead()) {
            console.log(`Oh no! player ${this.name} has died`)
            return;
        }
        // console.log(`Oh no! player ${this.name} has taken ${enemy.atk} damage. Their health is now ${this.hp}`)
    }

    isDead() {
        return this.hp <= 0
    }
}

class Enemy {
    constructor(name, hp, atk) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
    }

    takeHit(player) {
        if (this.isDead()) {
            console.log(`Enemy ${this.name} is already dead`)
            return;
        }
        this.hp = this.hp - player.atk;
        if (this.isDead()) {
            if (this.name === 'Monster1') {
                player.awards.push('medal')
            }
            console.log(`Oh yes! enemy ${this.name} has died`)
            return;
        }
        // console.log(`Oh no! player ${this.name} has taken ${player.atk} damage. Their health is now ${this.hp}`)
    }

    isDead() {
        return this.hp <= 0
    }
}

const player1 = new Player('Softy', 100, 20)

const enemy1 = new Enemy('Monster1', 80, 15)
const enemy2 = new Enemy('Monster2', 100, 15)
const enemy3 = new Enemy('Monster3', 101, 15)
const enemy4 = new Enemy('Monster4', 200, 15)
const enemy5 = new Enemy('Monster5', 60, 15)
const enemy6 = new Enemy('Monster6', 26, 15)
const enemy7 = new Enemy('Monster7', 10, 15)

enemy1.takeHit(player1)
// enemy1.takeHit(player1)
// enemy1.takeHit(player1)
// enemy1.takeHit(player1)
// enemy1.takeHit(player1)
enemy2.takeHit(player1)
enemy2.takeHit(player1)
enemy2.takeHit(player1)
enemy2.takeHit(player1)
enemy6.takeHit(player1)
enemy7.takeHit(player1)
enemy7.takeHit(player1)
enemy7.takeHit(player1)
enemy7.takeHit(player1)
enemy5.takeHit(player1)
enemy3.takeHit(player1)

console.log(
    enemy1.isDead(),
    enemy2.isDead(),
    enemy3.isDead(),
    enemy4.isDead(),
    enemy5.isDead(),
    enemy6.isDead(),
    enemy7.isDead(),
)

console.log('player1 awards', player1.awards)