import { Tournament } from '../types/Tournament';
import { Player } from '../types/Player';
import { Results } from '../types/Results';

export default function calculateTiebreakers(
  player: Player,
  tourney: Tournament
) {
  // calculate omw, ogw, pgw percentage based on all match results
  // filter matches that his player participated

  const { tiebreakers } = player;
  const { currentRound } = tourney;
  // Match Points: Players earn 3 match points for each match win and 1 match point for each match ending in a draw. (No points are awarded for a match loss.)
  // Game Points: Game points are similar to match points in that players earn 3 game points for each game they win and 1 point for each game that ends in a draw
  const { matchPoints, gamePoints } = tiebreakers;

  // Match-win percentage: A players match-win percentage is that play accumuated match points divided by 3 times the   number of r  ounds in which he or she competed, or 0.33

  const mwp =
    matchPoints / (currentRound * 3) < 0.33
      ? 0.33
      : matchPoints / (currentRound * 3);

  tourney.matches.filter(
    (item) => item.playerOne.id === player.id || item.playerTwo.id === player.id
  );

  // OMW% = (Each Opponents Match Win Percentage added) / Number of opponens
  // Opponent match-win percentage: A players opponents match-win percentage is the average match-win percentage of each opponent that player faced (ignoring those rounds for which the player received a bye)
  // Opponent game-win percentages: Similar to opponents match-win percentage, a players opponents game-win percentage is simply the average game-win percentage of all of that players opponents. And, as with opponents match-win percentage, each opponent has a minimum game-win percentage of 0.33.
  // Game-win percentage: Similar to the match-win percentage, a players game-win percentage is the total number of game points he or she earned divided by 3 times the number of games played.

  // calculate omw

  // calculate ogw

  // calculate pgw

  return player;
}
