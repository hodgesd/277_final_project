async function extractPlayerInfo(url, outputFile) {
  // Use the fetch API to retrieve the HTML from the URL
  const response = await fetch(url);
  const html = await response.text();

  // Use the DOMParser to parse the HTML string into a DOM tree
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Find the table element containing the player information
  const table = doc.querySelector(".stats_table");

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

    // Get the start year and end year from the second cell in the row
    const yearCell = row.cells[1];
    const startYear = yearCell.textContent.split("-")[0];
    const endYear = yearCell.textContent.split("-")[1];

    // Add the player information to the array
    players.push({
      name,
      url,
      startYear,
      endYear,
    });
  }

  // Convert the player information array to a JSON string
  const playersJson = JSON.stringify(players);

  // Write the JSON string to the output file
  fs.writeFileSync(outputFile, playersJson);
}
