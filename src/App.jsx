import React from "react";
import Input from "./components/Input";

function App() {
  // hook for player 1
  const [player1, setPlayer1] = React.useState("");
  // hook for player 2
  const [player2, setPlayer2] = React.useState("");

  // function to handle player 1 input
  const handlePlayer1 = (e) => {
    setPlayer1(e.target.value);
  };

  // function to handle player 2 input
  const handlePlayer2 = (e) => {
    setPlayer2(e.target.value);
  };

  // function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Player 1: ", player1);
    console.log("Player 2: ", player2);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Basketball Head2Head</h1>
      <Input label="Player 1" id="player1" onClick={handleSubmit} />
      <Input
        label="Player 2"
        id="player2"
        onClick={() => console.log("Button 2 clicked")}
      />
    </>
  );
}

export default App;
