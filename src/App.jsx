import React, { useState } from "react";
import Select, { createFilter } from "react-select";
import nba_stats from "/Users/derrickhodges/github/277_final_project/src/combinedData/nba_stats.json";

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
            <h2 className="text-center text-2xl">{selectedOption.Player}</h2>
            <h3 className="my-4 text-center text-2xl">
              {selectedOption && selectedOption.Year}
            </h3>
            <h3
              className={`my-4 text-center text-2xl ${
                leaderPTS_A ? "bg-yellow-200 underline decoration-sky-500" : ""
              }`}
            >
              {selectedOption.PTS}
            </h3>
            <h3
              className={`my-4 text-center text-2xl ${
                selectedOption.TRB > selectedPlayerB.TRB
                  ? "underline decoration-sky-500"
                  : ""
              }`}
            >
              {selectedOption.TRB}
            </h3>
            <h3
              className={`my-4 text-center text-2xl ${
                selectedOption.AST > selectedPlayerB.AST
                  ? "underline decoration-sky-500"
                  : ""
              }`}
            >
              {selectedOption.AST}
            </h3>
            <h3
              className={`my-4 text-center text-2xl ${
                selectedOption.BLK > selectedPlayerB.BLK
                  ? "underline decoration-sky-500"
                  : ""
              }`}
            >
              {selectedOption.BLK}
            </h3>
            <h3
              className={`my-4 text-center text-2xl ${
                selectedOption.STL > selectedPlayerB.STL &&
                "underline decoration-sky-500"
              }`}
            >
              {selectedOption.STL}
            </h3>
          </div>
          <div className="mt-20 flex flex-col items-center justify-center">
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
            <h2 className="text-center text-2xl">{selectedPlayerB.Player}</h2>
            <h3 className="my-4 text-center text-2xl">
              {selectedPlayerB.Year}
            </h3>
            <h3
              className={`my-4 text-center text-2xl ${
                !leaderPTS_A ? "underline decoration-sky-500" : ""
              }`}
            >
              {selectedPlayerB.PTS}
            </h3>
            <h3
              className={`my-4 text-center text-2xl ${
                selectedOption.TRB < selectedPlayerB.TRB
                  ? "highlight underline decoration-sky-500"
                  : ""
              }`}
            >
              {selectedPlayerB.TRB}
            </h3>
            <h3
              className={`my-4 text-center text-2xl ${
                selectedOption.AST < selectedPlayerB.AST
                  ? "underline decoration-sky-500"
                  : ""
              }`}
            >
              {selectedPlayerB.AST}
            </h3>
            <h3
              className={`my-4 text-center text-2xl ${
                selectedOption.BLK < selectedPlayerB.BLK
                  ? "underline decoration-sky-500"
                  : ""
              }`}
            >
              {selectedPlayerB.BLK}
            </h3>
            <h3
              className={`my-4 text-center text-2xl ${
                selectedOption.STL < selectedPlayerB.STL
                  ? "underline decoration-sky-500"
                  : ""
              }`}
            >
              {selectedPlayerB.STL}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
