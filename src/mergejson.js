import fs from "fs";

// Create a new object to store the combined data
let combinedData = {};

async function readJson(key) {
  const j = await fs.readFileSync(`players - ${key}.json`);
  return await JSON.parse(j);
}

// Read the JSON files for each letter using for loop
for (const letter of "zyxwvutsrqponmlkjihgfedcba") {
  const data = await readJson(letter);
  console.log(`Found ${data.length} players for letter ${letter}`);
  // Add the data from each letter to the combined object
  // await Object.assign(combinedData, data);
  combinedData = { ...combinedData, ...data };
}
// console.log(combinedData);
// Convert the player information array to a JSON string
const playersJson = JSON.stringify(combinedData, null, 2);

// Write the JSON string to the output file
fs.writeFileSync(`playerDatabase.json`, playersJson);
