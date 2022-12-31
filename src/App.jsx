import React, { useState } from "react";
import Select, { createFilter } from "react-select";
// import HighlightedStat from "./components/highlightedStat.jsx";
import nba_stats from "/Users/derrickhodges/github/277_final_project/src/combinedData/nba_stats.json";

function HighlightedStat({ thisStat, otherStat }) {
  const thisLeader = thisStat > otherStat;
  return (
    <h3
      className={`my-4 text-center text-2xl ${
        thisLeader ? "bg-yellow-200 underline decoration-sky-500" : ""
      }`}
    >
      {thisStat}
    </h3>
  );
}

function HighlightedSectStat({ thisPlayer, otherPlayer }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-2xl underline">{thisPlayer.Player}</h2>
      <h3 className="my-4 text-center text-2xl">
        {thisPlayer && thisPlayer.Year}
      </h3>
      <HighlightedStat thisStat={thisPlayer.PTS} otherStat={otherPlayer.PTS} />
      <HighlightedStat thisStat={thisPlayer.TRB} otherStat={otherPlayer.TRB} />
      <HighlightedStat thisStat={thisPlayer.AST} otherStat={otherPlayer.AST} />
      <HighlightedStat thisStat={thisPlayer.BLK} otherStat={otherPlayer.BLK} />
      <HighlightedStat thisStat={thisPlayer.STL} otherStat={otherPlayer.STL} />
    </div>
  );
}

function App() {
  const stats = nba_stats;

  const [selectedOption, setSelectedOption] = useState(stats[0]);
  const [selectedPlayerB, setselectedPlayerB] = useState(stats[0]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  const handleChangeB = (selectedPlayerB) => {
    setselectedPlayerB(selectedPlayerB);
  };

  const SelectPlayer = ({ setter }) => (
    <Select
      className="my-5"
      isClearable={true}
      virtualized={{
        height: 300,
        minOptionSize: 30,
      }}
      options={stats}
      onChange={setter}
      getOptionLabel={(stats) => stats.Player}
      getOptionValue={(stats) => stats.ID}
      filterOption={createFilter({ ignoreAccents: false })}
      placeholder="Select a player"
    />
  );

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

            <HighlightedSectStat
              thisPlayer={selectedOption}
              otherPlayer={selectedPlayerB}
            />
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
