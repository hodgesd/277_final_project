import React, { useState } from "react";
import Select from "react-select";
import HighlightedSectStat from "./components/HighlightedStatSect.jsx";
import scrapeStats from "./utils/scrapeStats.js";
import bbref_index from "/Users/derrickhodges/github/277_final_project/src/combinedData/bbref_index.json";
import nba_stats from "/Users/derrickhodges/github/277_final_project/src/combinedData/nba_stats.json";

function App() {
  const index = bbref_index;
  const stats = nba_stats;

  const [selectedOption, setSelectedOption] = useState(stats[0]);
  const [selectedPlayerB, setselectedPlayerB] = useState(stats[0]);

  const handleChange = (selectedOption) => {
    console.log(`Option selected:`, selectedOption);

    setSelectedOption(selectedOption);
  };
  const handleChangeB = (selectedPlayerB) => {
    setselectedPlayerB(selectedPlayerB);
  };
  // const handleChange = (selectedOption) => {
  //   setSelectedOption(selectedOption);
  //   console.log(`Option selected:`, selectedOption);
  // };
  // const handleChangeB = (selectedPlayerB) => {
  //   setselectedPlayerB(selectedPlayerB);
  // };

  const SelectPlayer = ({ setter }) => (
    <Select
      className="my-5"
      isClearable={true}
      virtualized={{
        height: 300,
        minOptionSize: 30,
      }}
      options={index}
      onChange={setter}
      getOptionLabel={(index) => index.name}
      getOptionValue={(index) => index.name}
      // filterOption={createFilter({ ignoreAccents: false })}
      placeholder="Select a player"
    />
  );
  // const SelectPlayer = ({ setter }) => (
  //   <Select
  //     className="my-5"
  //     isClearable={true}
  //     virtualized={{
  //       height: 300,
  //       minOptionSize: 30,
  //     }}
  //     options={stats}
  //     onChange={setter}
  //     getOptionLabel={(stats) => stats.Player}
  //     getOptionValue={(stats) => stats.ID}
  //     filterOption={createFilter({ ignoreAccents: false })}
  //     placeholder="Select a player"
  //   />
  // );

  // determine if Player A has more points than Player B
  const leaderPTS_A =
    selectedOption.PTS > selectedPlayerB.PTS
      ? "underline decoration-sky-500"
      : "";

  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full h-screen"
        // style={
        //   {
        //     // justifyContent: "center",
        //     // width: "200px",
        //   }
        // }
      >
        <h1 className="my-4 text-center text-4xl">NBA Head2Head</h1>
        <div className="flex flex-row justify-center"></div>
        <div className="grid grid-cols-3 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <SelectPlayer setter={handleChange} />
            {/* <HighlightedSectStat
              thisPlayer={selectedOption}
              otherPlayer={selectedPlayerB} */}
            {/* kk />mm */}
            <HighlightedSectStat
              thisPlayer={selectedOption}
              otherPlayer={selectedPlayerB}
            />
            yo
            {selectedOption.name}
            {scrapeStats("Michael Jordan").then((stats) => {
              console.log(stats);
            })}
          </div>
          <div className="mt-24 flex flex-col items-center justify-center">
            <h2 className="text-center text-2xl">Stats</h2>
            <h3 className="my-4 text-center text-2xl">YEAR</h3>
            <h3 className="my-4 text-center text-2xl">PPG</h3>
            <h3 className="my-4 text-center text-2xl">RPG</h3>
            <h3 className="my-4 text-center text-2xl">APG</h3>
            <h3 className="my-4 text-center text-2xl">BLK</h3>
            <h3 className="my-4 text-center text-2xl">STL</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <SelectPlayer setter={handleChangeB} />
            <HighlightedSectStat
              thisPlayer={selectedPlayerB}
              otherPlayer={selectedOption}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
