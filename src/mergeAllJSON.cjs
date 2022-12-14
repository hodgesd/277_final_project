const fs = require("fs");

function combineJsonFiles(dir) {
  const files = fs.readdirSync(dir);
  let combinedData = {};

  for (const file of files) {
    const data = fs.readFileSync(`${dir}/${file}`);

    const obj = JSON.parse(data);
    console.log(`Found ${obj.length} players for letter ${file}`);
    console.log(
      `Before: current ${obj.length} (${typeof obj}), ${
        Object.keys(combinedData).length
      } (${typeof combinedData})total`
    );
    // console.log(`Before: ${Object.keys(combinedData).length}`);
    combinedData = { ...obj, ...combinedData };
    console.log(`After: ${Object.keys(combinedData).length} total`);
  }
  return combinedData;
}

const dir = "data";

result = combineJsonFiles(dir);

// console.log(result);
