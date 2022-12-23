import nba_stats from "../data/nba_stats.json" assert { type: "json" };
import combineSeasonStats from "./combineSeasonStats.js";
import saveJSON from "./saveJSON.js";

const stats = nba_stats;
const combinedStats = combineSeasonStats(stats);

saveJSON(combinedStats, "nba_career_stats.json");
