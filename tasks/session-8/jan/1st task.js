class Player {
    constructor(name, hp, atk) {
        this.Playername = name;
        this.Health = hp;
        this.Attack = atk;
    }
    get name() {
        return this.Playername;
    }
    get hp() {
        return this.Health;
    }
    set hp(value) {
        if (value <= 0) {
            this.Health = 0;
            console.log(`${this.Playername} has died!`);
        } else {
            this.Health = value;
        }
    }
    get atk() {
        return this.Attack;
    }
    takeHit(monster) {
        if (this.hp <= 0) return;
        this.hp = this.hp - monster.atk;
        if (this.hp > 0) {
            console.log(`${this.name} took ${monster.atk} damage. Their health is now: ${this.hp}`);
        }
    }
}
class Enemy {
    constructor(name, hp, atk) {
        this.Enemyname = name;
        this.Health = hp;
        this.Attack = atk;
    }
    get name() {
        return this.Enemyname;
    }
    get hp() {
        return this.Health;
    }
    set hp(value) {
        if (value <= 0) {
            this.Health = 0;
            console.log(`${this.Enemyname} has been defeated!`);
        } else {
            this.Health = value;
        }
    }
    get atk() {
        return this.Attack;
    }
    takeHit(player) {
        if (this.hp <= 0) return;
        this.hp = this.hp - player.atk;
        if (this.hp > 0) {
            console.log(`${this.name} took ${player.atk} damage. Their health is now: ${this.hp}`);
        }
    }
}
const hero = new Player("Jan", 100, 20);
const monster = new Enemy("Stalker", 80, 10);

hero.takeHit(monster)
hero.takeHit(monster)
hero.takeHit(monster)
monster.takeHit(hero)
monster.takeHit(hero)
monster.takeHit(hero)

if (hero.hp <= 0) {
    console.log(`\n${monster.name} wins T_T`);
} else if (monster.hp <= 0) {
    console.log(`\n${hero.name} wins!`);
} else {
    console.log('\nFinal Status:');
    console.log('Player:', hero.name, '\n', 'HP:', hero.hp, 'ATK:', hero.atk);
    console.log('Monster:', monster.name, '\n', 'HP:', monster.hp, 'ATK:', monster.atk);
}