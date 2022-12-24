async function extractPlayerInfo(outputFile) {
  // Launch a new Puppeteer browser
  const browser = await puppeteer.launch();

  // Create an array to store the player information
  const players = [];

  // Loop through each letter of the alphabet
  for (const letter of "abcdefghijklmnopqrstuvwxyz") {
    // Open a new page in the browser
    const page = await browser.newPage();

    // Navigate to the URL for the current letter
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

      // Loop
