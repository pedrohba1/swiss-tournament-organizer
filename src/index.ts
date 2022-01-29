import createTourney from '../src/Tournament/createTourney';
import startTourney from '../src/Tournament/startTourney';
import setResult from '../src/Tournament/setResult';
import { Options } from '../src/types/Options';
import { Player } from '../src/types/Player';
import nextRound from '../src/Tournament/nextRound';
import calculateTiebreakers from '../src/utils/calculateTiebreakers';

const options = <Options>{
  seed: 3,
  format: 'swiss',
  gameType: 'magic',
  playoffs: false,
  cutLimit: 8,
  maxRounds: null,
  bestOf: 3,
  winValue: 3,
  maxRound: null,
  drawValue: 1,
  lossValue: 0,
};

const players = <Player[]>[];
const amount = 4;
for (let i = 0; i < amount; i++) {
  const player = <Player>{
    id: `${i}`,
    nickname: `user_${i}`,
    name: `name_${i}`,
  };
  players.push(player);
}

let tourney = createTourney(options, players);

tourney = startTourney(tourney);

console.log('last matches', tourney.matches);

tourney = setResult(tourney, 1, { d: 0, p1: 0, p2: 2 });
tourney = setResult(tourney, 2, { d: 0, p1: 2, p2: 1 });

tourney = nextRound(tourney);

const newMatches = tourney.matches.filter(
  (m) => m.round === tourney.currentRound
);

console.log('new matches', newMatches);

for (const player of tourney.players) {
}
