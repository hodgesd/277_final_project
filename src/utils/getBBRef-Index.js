import fs from "fs";
import puppeteer from "puppeteer";

async function extractPlayerInfo() {
  // Launch a new Puppeteer browser
  const browser = await puppeteer.launch();

  // Create an array to store the player information
  const players = [];

  // Loop through each letter of the alphabet
  for (const letter of "d") {
    // Open a new page in the browser
    const page = await browser.newPage();

    // Navigate to the URL for players with last names starting with the current letter
    const url = `https://www.basketball-reference.com/players/${letter}/`;
    await page.goto(url);

    // Wait for the table element containing the player information to be loaded
    await page.waitForSelector(".stats_table");

    // Evaluate a function on the page to extract the player information
    const letterPlayers = await page.evaluate(() => {
      // Find the table element
      const table = [...document.querySelectorAll("tr[data-row]:not(.thead)")];

      // Create an array to store the player information
      const players = [];

      // Loop through each row in the table (skipping the first row)
      table.forEach((player) => {
        // Get the player name and URL from the first cell in the row
        const name = player.querySelector("a").textContent;
        const url = player.querySelector("a").href;

        // const startYear = player.querySelector(
        //   "td[data-stat='year_min']"
        // )?.textContent;
        // const endYear = player.querySelector(
        //   "td[data-stat='year_max']"
        // )?.textContent;

        // Add the player information to the array
        players.push({
          name,
          url,
        });
      });

      // Return the array of player information
      return players;
    });

    // Add the player information for the current letter to the overall array
    console.log(`Found ${letterPlayers.length} players for letter ${letter}`);
    const playersJson = JSON.stringify(letterPlayers);
    fs.writeFileSync(`../data/players - ${letter}.json`, playersJson);
    // players.push(...letterPlayers);
  }

  // Close the browser
  await browser.close();

  // Return the array of player information
  return players;
}

const players = await extractPlayerInfo();

// Convert the player information array to a JSON string

// Write the JSON string to the output file

// console.log(players);
