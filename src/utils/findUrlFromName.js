import bbref_index from "/Users/derrickhodges/github/277_final_project/src/combinedData/bbref_index.json" assert { type: "json" };

export default function findUrlFromName(name) {
  const index = bbref_index;
  const found = index.find((element) => element.name === name);
  return found.url;
}

// console.log(findUrlFromName("Vinnie Johnson"));
