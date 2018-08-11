// Write your JS here
var hero = {
    name : "Rein", //:p
    heroic: true,
    inventory : [],
    health : 10,
    weapon : { 
            type : 'knife',
            damage: 2,
    }
};

var enemy = {
    name: "Bad Guy",
    heroic: true,
    inventory: [],
    health: 10,
    weapon : {
        type : 'knife',
        damage: 2,
    }
};

function rest(hero){
    hero.health = 10;
    return hero;
};

function resetHealth(){
    hero.health = 10;
    displayStats();
};

function pickUpItem(hero, weapon){
    hero.inventory.push(weapon);
};

function addDagger(){
    hero.weapon.type = 'dagger';
    hero.weapon.damage = 2;
    hero.inventory.push(hero.weapon);
    displayStats();
};

function equipWeapon(hero){
    if (hero.inventory.length === 0){ 
        return false
    } else {
        hero.weapon = hero.inventory[0];
        return true
    }
};

function weaponFromBag(){
    hero.weapon = hero.inventory[0];
    displayStats();
}

function displayStats(){
    document.getElementById("herostat").innerHTML = `
    name: ${hero.name} <br>
    health: ${hero.health} <br>
    weapon type: ${hero.weapon.type} <br>
    weapon damage: ${hero.weapon.damage} 
    `;
}

function displayStatsEnemy(){
    document.getElementById("enemystat").innerHTML = `
    name: ${enemy.name} <br>
    health: ${enemy.health} <br>
    weapon type: ${enemy.weapon.type} <br>
    weapon damage: ${enemy.weapon.damage} 
    `;
}

displayStatsEnemy();

function chooseName(){
    hero.name = document.getElementById("customheroname").value;
    displayStats();
}

function fightEnemy(){
    var random = Math.round(Math.random());
    console.log(random);
    if (random === 0){
        enemy.health -= hero.weapon.damage
        console.log(enemy.health)
        displayStatsEnemy();
        window.alert("You won!")
    } else {
        hero.health -= enemy.weapon.damage
        console.log(hero.health)
        displayStats();
        window.alert("You lost :(")
    }
    gameOver();
};

function gameOver(){
    if (hero.health <= 0){
        document.getElementById("myBtn").disabled = true;
        window.alert("Game over. Reload to try again.");
    } else if (enemy.health <= 0){
        document.getElementById("myBtn").disabled = true;
        window.alert("You defeated the enemy! Reload to play again.")
    } else {
        return false;
    }
};

displayStats();
