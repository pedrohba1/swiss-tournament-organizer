import { Tournament } from '../../types/Tournament';
import { Matches } from '../../types/Match';
import { Player } from '../../types/Player';
import createNewMatch from '../createNewMatch';

export default function singleEliminationNextRound(
  tourney: Tournament
): Tournament {
  const lastMaches: Matches = tourney.matches.filter(
    (m) => m.round === tourney.currentRound - 1
  );
  const players: Player[] = [];

  for (const match of lastMaches) {
    if (match.result.p1 > match.result.p2) {
      players.push(match.playerOne);
    } else {
      players.push(match.playerTwo);
    }
  }

  const totalSlots = 2 ** Math.ceil(Math.log2(players.length));
  const matches: Matches = [];

  for (let i = 0; i < totalSlots; i += 2) {
    matches.push(createNewMatch(players[i], players[i + 1], tourney));
  }

  tourney.matches = tourney.matches.concat(matches);
  return tourney;
}
