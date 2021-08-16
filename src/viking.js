// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damageAmount) {
    this.health -= damageAmount;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damageAmount) {
    super.receiveDamage(damageAmount);
    if (this.health > 0) {
      return `${this.name} has received ${damageAmount} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damageAmount) {
    super.receiveDamage(damageAmount);
    if (this.health > 0) {
      return `A Saxon has received ${damageAmount} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }

  attack() {
    return this.strength;
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length); //Random Viking using Math.random
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length); //Random Saxon using Math.random
    let randomSaxon = this.saxonArmy[randomSaxonIndex]; //Random Saxon variable
    let randomViking = this.vikingArmy[randomVikingIndex]; //Random Viking variable
    let result = randomSaxon.receiveDamage(randomViking.attack());
    if (randomSaxon.health <= 0) {
      // if statement to check if randomSaxon health is <= 0
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result; //Returns the result of the vikingAttack
  }

  saxonAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length); //Random Viking using Math.random
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length); //Random Saxon using Math.random
    let randomSaxon = this.saxonArmy[randomSaxonIndex]; //Random Saxon variable
    let randomViking = this.vikingArmy[randomVikingIndex]; //Random Viking variable
    let result = randomViking.receiveDamage(randomSaxon.attack());
    if (randomViking.health <= 0) {
      // if statement to check if randomSaxon health is <= 0
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }

  showStatus() {
    let vikingArmy = [];
    let saxonArmy = [];
    if (this.vikingArmy >= 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy >= 0) {
      return 'Vikings have won the war of the century!';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
