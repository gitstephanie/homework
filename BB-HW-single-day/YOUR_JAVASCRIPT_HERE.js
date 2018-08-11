// Write your JS here
var hero = {
    name : "I",
    heroic: true,
    inventory : [],
    health : 10,
    weapon : { 
            type : 'knife',
            damage: 2,
    }
};

function rest (hero){
    hero.health = 10;
    return hero;
};

function resetHealth(){
    hero.health = 10;
};

function pickUpItem(hero, weapon){
    hero.inventory.push(weapon);
};

function addDagger(){
    hero.inventory.push(hero.weapon = {type: dagger, damage: 2})
};

function equipWeapon(hero){
    if (hero.inventory === null){

    } else {
    hero.weapon = hero.inventory[0];
    }
};

