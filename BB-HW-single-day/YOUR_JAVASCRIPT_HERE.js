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
    window.alert(
    `Hero stats
    name: ${hero.name}
    health: ${hero.health}
    weapon type: ${hero.weapon.type}
    weapon damage: ${hero.weapon.damage} 
    `)
}

function chooseName(){
    hero.name = document.getElementById("customheroname").value;
    displayStats();
}

displayStats();

