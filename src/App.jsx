import React, { useState } from "react";
import Select from "react-select";

function App() {
  const options = [
    {
      value: "init",
      label: "Player",
      id: 0,
      ppg: "-",
      rpg: "-",
      apg: "-",
    },
    {
      value: "embiid",
      label: "Joel Embiid",
      id: 1,
      ppg: 27.5,
      rpg: 13.6,
      apg: 3.2,
    },
    {
      value: "harden",
      label: "James Harden",
      id: 2,
      ppg: 36.1,
      rpg: 6.6,
      apg: 7.5,
    },
    {
      value: "lebron",
      label: "LeBron James",
      id: 3,
      ppg: 25.3,
      rpg: 7.4,
      apg: 7.4,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedPlayerB, setselectedPlayerB] = useState(options[0]);

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
      options={options}
      onChange={setter}
      placeholder="Select a player"
    />
  );
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
            <h2 className="text-center text-2xl">{selectedOption.label}</h2>
            <h3 className="my-4 text-center text-2xl">
              {selectedOption && selectedOption.ppg}
            </h3>
            <h3 className="my-4 text-center text-2xl">
              {selectedOption && selectedOption.rpg}
            </h3>
            <h3 className="my-4 text-center text-2xl">
              {selectedOption && selectedOption.apg}
            </h3>
          </div>
          <div className="mt-20 flex flex-col items-center justify-center">
            <h2 className="text-center text-2xl">Stats</h2>
            <h3 className="my-4 text-center text-2xl">PPG</h3>
            <h3 className="my-4 text-center text-2xl">RPG</h3>
            <h3 className="my-4 text-center text-2xl">APG</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <SelectPlayer setter={handleChangeB} />
            <h2 className="text-center text-2xl">{selectedPlayerB.label}</h2>
            <h3 className="my-4 text-center text-2xl">{selectedPlayerB.ppg}</h3>
            <h3 className="my-4 text-center text-2xl">{selectedPlayerB.rpg}</h3>
            <h3 className="my-4 text-center text-2xl">{selectedPlayerB.apg}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
