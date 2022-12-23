import fs from "fs";

export default function saveJSON(data, file) {
  const finished = (error) => {
    if (error) {
      console.error(error);
      return;
    }
  };
  console.log(`Saving ${file}...`);
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFile(file, jsonData, finished);
}
