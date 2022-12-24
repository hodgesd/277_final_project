import fs from "fs";
import puppeteer from "puppeteer";

async function extractPlayerInfo(url, outputFile) {
  // Launch a new Puppeteer browser
  const browser = await puppeteer.launch();

  // Open a new page in the browser
  const page = await browser.newPage();

  // Navigate to the specified URL
  await page.goto(url);

  // Wait for the table element containing the player information to be loaded
  await page.waitForSelector(".stats_table");

  // Evaluate a function on the page to extract the player information
  const players = await page.evaluate(() => {
    // Find the table element
    const playerTable = [
      ...document.querySelectorAll("tr[data-row]:not(.thead)"),
    ];

    // Create an array to store the player information
    const players = [];

    // Loop through each row in the table (skipping the first row)
    playerTable.forEach((player) => {
      // Get the player name and URL from the first cell in the row
      const name = player.querySelector("a").textContent;
      const url = player.querySelector("a").href;

      const startYear = player.querySelector(
        "td[data-stat='year_min']"
      )?.textContent;
      const endYear = player.querySelector(
        "td[data-stat='year_max']"
      )?.textContent;

      // Add the player information to the array
      players.push({
        name,
        url,
        startYear,
        endYear,
      });
    });

    // Return the array of player information
    return players;
  });

  // Convert the player information array to a JSON string
  const playersJson = JSON.stringify(players);

  // Write the JSON string to the output file
  fs.writeFileSync(outputFile, playersJson);

  // Close the browser
  await browser.close();
}

extractPlayerInfo(
  "https://www.basketball-reference.com/players/a/",
  "players.json"
);
