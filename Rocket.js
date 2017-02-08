class Rocket {
  constructor(fuel) {
    this.fuel = fuel || 0;
  };

  addFuel(amount){
    this.fuel = this.fuel + amount;
    console.log(`You now have ${this.fuel} megagallons of fuel`)
  }

  fire(){
    if(this.fuel > 0){
      this.fuel--
      console.log(`The engines have been fired; you now have ${this.fuel} megagallons of fuel`)
      return true
    } else {
      console.log(`The engines have failed to fire`)
      return false
    }
  }
};

module.exports = Rocket;
