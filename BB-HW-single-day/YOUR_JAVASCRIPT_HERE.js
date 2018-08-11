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

function addDagger(weapon){
    hero.weapon.type = 'dagger';
    hero.weapon.damage = 2;
    hero.inventory.push(hero.weapon);
};

function equipWeapon(hero){
    if (hero.inventory.length === 0){ 
        return false
    } else {
        hero.weapon = hero.inventory[0];
        return true
    }
};

function fromBag(){
    hero.weapon = hero.inventory[0];
}
function displayStats(){
    document.write(
    `Hero stats <br/>
    name: ${hero.name} </br>
    health: ${hero.health} </br>
    weapon type: ${hero.weapon.type} <br/>
    weapon damage: ${hero.weapon.damage} 
    `)
}

/*function chooseName(){
    hero.name= getElementById("namehero").submit();
    displayStats();
}*/



displayStats();

