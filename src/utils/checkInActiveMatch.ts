import { Tournament } from '..';

export default function checkInActiveMatch(
  tourney: Tournament,
  playerId: string
) {
  return tourney.matches.find(
    (m) =>
      (m.playerOne.id === playerId || m.playerTwo.id === playerId) &&
      m.round === tourney.currentRound
  );
}
