import { Match, Matches } from '../types/Match';
import { Tournament } from '../types/Tournament';
import shuffle from './shuffle';

export default function pairOpponents(
  tourney: Tournament,
  seed: number
): Tournament {
  // Shuffle players with seed
  const players = shuffle(tourney.players, seed);
  // create and assign matches
  const matches: Matches = [];
  for (let i = 0; i < players.length; i += 2) {
    const match = <Match>{
      playerOne: players[i],
      // last will contain bye. Assign bye to player.
      playerTwo: players[i + 1] ? players[i + 1] : 'bye',
      active: true,
      draws: 0,
      matchNumber: i,
      playerOneWins: 0,
      playerTwoWins: 0,
      round: 1,
      result: null,
    };
    matches.push(match);
  }

  tourney.matches = matches;
  return tourney;
}
