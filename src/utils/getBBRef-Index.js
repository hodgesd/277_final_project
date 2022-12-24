import fs from "fs";
import puppeteer from "puppeteer";

async function extractPlayerInfo() {
  // Launch a new Puppeteer browser
  const browser = await puppeteer.launch();

  // Create an array to store the player information
  const players = [];

  // Loop through each letter of the alphabet
  for (const letter of "ab") {
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
      const table = document.querySelector(".stats_table");

      // Create an array to store the player information
      const players = [];

      // Loop through each row in the table (skipping the first row)
      for (let i = 1; i < table.rows.length; i++) {
        // Get the current row
        const row = table.rows[i];

        // Get the player name and URL from the first cell in the row
        const nameCell = row.cells[0];
        const name = nameCell.textContent;
        const url = nameCell.firstChild.href;

        // Add the player information to the array
        players.push({
          name,
          url,
        });
      }

      // Return the array of player information
      return players;
    });

    // Add the player information for the current letter to the overall array
    players.push(...letterPlayers);
  }

  // Close the browser
  await browser.close();

  // Return the array of player information
  return players;
}

const players = await extractPlayerInfo();

// Convert the player information array to a JSON string
const playersJson = JSON.stringify(players);

// Write the JSON string to the output file
fs.writeFileSync("players.json", playersJson);

// console.log(players);
