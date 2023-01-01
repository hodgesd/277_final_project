import axios from "axios";
import cheerio from "cheerio";
import findUrlFromName from "./findUrlFromName.js";

// const player = "Michael Jordan";
export default function scrapeStats() {
  // Get the URL of the player's stats page
  const url = findUrlFromName("Michael Jordan");
  console.log(url);

  return axios
    .get(url)
    .then((response) => {
      const $ = cheerio.load(String(response.data));
      // Select the elements containing the stats
      const points = $(
        "#info > div.stats_pullout > div.p1 > div:nth-child(2) > p:nth-child(3)"
      ).text();
      const rebounds = $(
        "#info > div.stats_pullout > div.p1 > div:nth-child(3) > p:nth-child(3)"
      ).text();
      const assists = $(
        "#info > div.stats_pullout > div.p1 > div:nth-child(4) > p:nth-child(3)"
      ).text();
      return { points, rebounds, assists };
    })
    .catch((error) => {
      console.error(error);
    });
}

scrapeStats().then((stats) => {
  console.log(stats); // { points: '30.1', rebounds: '6.2', assists: '5.3' }
});
