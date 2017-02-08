let Spaceship = require ('./Spaceship');
let CrewMember = require('./CrewMember');
let Rocket = require('./Rocket');

let launchpad = (ship, crew, rocket) => {
  console.log("Fasten your seatbelts, we're in preflight!");
  console.log(`Hello, ${ship.name}`);
  ship.loadCrew(crew);
  console.log(`${ship.captain().name} has been declared captain by the crew!!!!`)
  rocket.addFuel(9001)
  ship.mountPropulsion(rocket);
  ship.takeoff()
};

let trainCrew = (crew) => {
  let trained = crew.map((member)=> {
    let peeps = new CrewMember(member);
    peeps.trained = true;
    return peeps;
  })
  return trained;
}

let crewNames = ['Ezra', 'Evianne', 'Corey', 'Arielle', 'Nick', 'Will', 'Ryan'];

let trainedcrew = trainCrew(crewNames);

let ourShip = new Spaceship('phoobarPhalcon');
let ourRocket = new Rocket();
launchpad(ourShip, trainedcrew, ourRocket);
