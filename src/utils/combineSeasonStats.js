export default function combineSeasonStats(stats) {
  // Create an empty object to store the combined stats for each Player
  let combinedStats = {};

  const blankPlayer = {
    G: 0,
    ID: 0,
    PTS: 0,
    TRB: 0,
    AST: 0,
    STL: 0,
    BLK: 0,
  };

  // Loop through each Player in the stats
  for (const season of stats) {
    // Check if the Player has an entry in the combinedStats object
    if (!combinedStats[season.Player]) {
      // If not, create a new entry with the Player's stats for this season
      // combinedStats[season.Player] = season;
      // combinedStats[season.Player] = season;
      combinedStats[season.Player] = {
        ID: 0,
        G: 0,
        PTS: 0,
        TRB: 0,
        AST: 0,
        STL: 0,
        BLK: 0,
      };
      // combinedStats[season.Player].PTS = 0;
      // console.log(
      //   `New player:  Adding ${season.Player}(${season.Year}): ${
      //     season.G
      //   } games - ${combinedStats[season.Player].G} total games`
      // );
      // combinedStats[season.Player].ID = season.ID;
      combinedStats[season.Player].G += Number(season.G);
      combinedStats[season.Player].ID = Number(season.ID);
      combinedStats[season.Player].PTS = Number(season.PTS) * Number(season.G);
      combinedStats[season.Player].TRB = Number(season.TRB) * Number(season.G);
      combinedStats[season.Player].AST = Number(season.AST) * Number(season.G);
      combinedStats[season.Player].BLK = Number(season.BLK) * Number(season.G);
      combinedStats[season.Player].STL = Number(season.STL) * Number(season.G);
      combinedStats[season.Player].careerPPG =
        combinedStats[season.Player].PTS / combinedStats[season.Player].G;
      combinedStats[season.Player].careerRPG =
        combinedStats[season.Player].TRB / combinedStats[season.Player].G;
      combinedStats[season.Player].careerAPG =
        combinedStats[season.Player].AST / combinedStats[season.Player].G;
      combinedStats[season.Player].careerSPG =
        combinedStats[season.Player].STL / combinedStats[season.Player].G;
      combinedStats[season.Player].careerBPG =
        combinedStats[season.Player].BLK / combinedStats[season.Player].G;

      console.log(
        `New: ${season.Player}(${season.Year}) ${combinedStats[
          season.Player
        ].careerPPG.toFixed(1)} / ${combinedStats[
          season.Player
        ].careerRPG.toFixed(1)} / ${combinedStats[
          season.Player
        ].careerAPG.toFixed(1)} / ${combinedStats[
          season.Player
        ].careerSPG.toFixed(1)} / ${combinedStats[
          season.Player
        ].careerBPG.toFixed(1)}`
      );
    } else {
      // If the Player does have an entry, add their stats for this season to their career stats
      combinedStats[season.Player].G += Number(season.G);
      combinedStats[season.Player].PTS += Number(season.PTS) * Number(season.G);
      combinedStats[season.Player].TRB += Number(season.TRB) * Number(season.G);
      combinedStats[season.Player].AST += Number(season.AST) * Number(season.G);
      combinedStats[season.Player].STL += Number(season.STL) * Number(season.G);
      combinedStats[season.Player].BLK += Number(season.BLK) * Number(season.G);
      combinedStats[season.Player].careerPPG =
        combinedStats[season.Player].PTS / combinedStats[season.Player].G;
      combinedStats[season.Player].careerRPG =
        combinedStats[season.Player].TRB / combinedStats[season.Player].G;
      combinedStats[season.Player].careerAPG =
        combinedStats[season.Player].AST / combinedStats[season.Player].G;
      combinedStats[season.Player].careerSPG =
        combinedStats[season.Player].STL / combinedStats[season.Player].G;
      combinedStats[season.Player].careerBPG =
        combinedStats[season.Player].BLK / combinedStats[season.Player].G;

      // Log career ppg for each player
      console.log(
        `Update: ${season.Player}(${season.Year}) ${combinedStats[
          season.Player
        ].careerPPG.toFixed(1)} / ${combinedStats[
          season.Player
        ].careerRPG.toFixed(1)} / ${combinedStats[
          season.Player
        ].careerAPG.toFixed(1)} / ${combinedStats[
          season.Player
        ].careerSPG.toFixed(1)} / ${combinedStats[
          season.Player
        ].careerBPG.toFixed(1)}`
      );
    }
  }

  // Return the combined stats for each Player
  return combinedStats;
}
