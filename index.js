#! /usr/bin/env node
import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//define player
class Player {
    name;
    fuel;
    energy;
    constructor(name) {
        this.name = name;
        this.fuel = 100;
        this.energy = 100;
    } //method to get name
    getName() {
        return this.name;
    } //method to get fuel
    getFuel() {
        return this.fuel;
    } //method to get energy
    getEnergy() {
        return this.energy;
    }
    //method to decrease players fuel
    decreaseFuelamount(amount) {
        this.fuel -= amount;
        if (amount >= 0) {
            console.log(`${this.name} has remaining Fuel is ${this.fuel} ! `);
            rl.close();
        }
        else {
            console.log(`${this.name} has been defeated, Your game is Over !`);
        }
    }
}
//define monster
class Monster {
    name;
    fuel;
    constructor(name) {
        this.name = name;
        this.fuel = 50;
    } //method to get name
    getName() {
        return this.name;
    } //method to get fuel
    getFuel() {
        return this.fuel;
    } //method of Monster Attack
    Attack(player) {
        const damage = Math.floor(Math.random() * 10) + 1;
        console.log(`${this.name} attacks ${player.getName()} for ${damage} Damage !`);
        player.decreaseFuelamount(damage);
    }
}
const player = new Player("Hero");
const monster = new Monster("Zombie");
// Battle
console.log(`A Wild ${monster.getName()} comes !`);
function Battle() {
    rl.question("Press Enter To Attack ! ", () => {
        const playerAttack = Math.floor(Math.random() * 20) + 1;
        const energyConsumption = Math.floor(Math.random() * 10) + 1;
        player.decreaseFuelamount(energyConsumption);
        console.log(`${player.getName()} Attacks ${monster.getName()} for ${playerAttack} Damage !`);
        monster.Attack(player);
        if (player.getFuel() > 0 && player.getEnergy() > 0) {
            console.log(`========= !`);
            console.log(`NEXT ROUND !`);
            console.log(`Player's FUEL  ${player.getFuel()} ! `);
            console.log(`Player's ENERGY ${player.getEnergy()} !`);
            console.log(`Monster's FUEL ${monster.getFuel()} !`);
            console.log(`========== !`);
        }
    });
}
Battle();
