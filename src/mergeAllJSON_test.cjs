const fs = require("fs");

function combineJsonFiles(dir) {
  // const files = fs.readdirSync(dir);
  let combinedData = {};
    //json object with two elements
  const data1 = {
    "name": "John",
    "age": 30
  };
  const data2 = [{
    "name": "Peter",
    "age": 40
  }, {
    "name": "Amy",
    "age": 20
    }];

  //convert json object to string
  const data1String = JSON.stringify(data1);
  const data2String = JSON.stringify(data2);

  //write json string to a file

  }
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
  return combinedData;
}

const dir = "data";

result = combineJsonFiles(dir);

// console.log(result);
