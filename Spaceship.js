class Spaceship {
  constructor(name){
    this.name = name;
    this.crew = [];
    this.propulsion = null;
  }
  loadCrew(crew){
    crew.forEach((member) => {
      this.crew.push(member);
      console.log(`${member.name} has joined the crew!!!!!!!!!!!!!`);
    });
  };

  captain() {
    let number = this.crew.length
    let randomNumber = Math.floor(Math.random() * number);
    return this.crew[randomNumber];
  }

  mountPropulsion(rocket) {
    this.propulsion = rocket;
    console.log("The propulsion has been mounted!");
  }

  takeoff() {
    if (this.propulsion.fire()){
      console.log("RBMBRBRMBRBMRMBRRRR!!!!!")
    } else {
      console.log("*Crickets*")
    }
  }
};

module.exports = Spaceship;
