const personnel = [
  {
    id: 5,
    name: 'Brian Mason',
    pilotingScore: 100,
    shootingScore: 36,
    isDeltaPilot: true
  },
  {
    id: 82,
    name: 'Pauline Saunders',
    pilotingScore: 83,
    shootingScore: 91,
    isDeltaPilot: false
  },
  {
    id: 22,
    name: 'Carry Beaman',
    pilotingScore: 34,
    shootingScore: 150,
    isDeltaPilot: false
  },
  {
    id: 15,
    name: 'Frank Johnson',
    pilotingScore: 23,
    shootingScore: 201,
    isDeltaPilot: true
  },
  {
    id: 11,
    name: 'Caleb Dume',
    pilotingScore: 71,
    shootingScore: 85,
    isDeltaPilot: true
  }
];

//Get the combined total scores (both piloting and shooting together) of all Delta Pilots.

const totalJediScore = personnel
  .filter(person => person.isDeltaPilot)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);

console.log(totalJediScore);
