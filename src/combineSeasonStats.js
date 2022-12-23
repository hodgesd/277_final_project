function combineSeasonStats(stats) {
  // Create an empty object to store the combined stats for each player
  const combinedStats = {};

  // Loop through each player in the stats
  for (const player of stats) {
    // Check if the player has an entry in the combinedStats object
    if (!combinedStats[player.name]) {
      // If not, create a new entry with the player's stats for this season
      combinedStats[player.name] = player;
    } else {
      // If the player does have an entry, add their stats for this season to their career stats
      combinedStats[player.name].points += player.points;
      combinedStats[player.name].rebounds += player.rebounds;
      combinedStats[player.name].assists += player.assists;
      // etc. for any other stats you want to combine
    }
  }

  // Return the combined stats for each player
  return combinedStats;
}
