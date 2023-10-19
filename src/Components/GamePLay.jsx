import React from "react";
import PropTypes from "prop-types";
import TotalScore from "./TotalScore";
import { useState } from "react";

import NumberSelector from "./NumberSelector";
import { styled } from "styled-components";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

const GamePLay = (props) => {
  const [score, setScore] = useState(0);
  const [selectedNumber, SetSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const[showRules,setShowRules]=useState(false);

  const resetScore=()=>{
    setScore(0);
  }

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rolDice = () => {
    if (!selectedNumber) {
      setError("you have note selected any number ");
      return;
    }
      
    
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    SetSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="Top-Section">
        <TotalScore score={score} />
        <NumberSelector
          SetSelectedNumber={SetSelectedNumber}
          selectedNumber={selectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RoleDice currentDice={currentDice} rolDice={rolDice} />


        <div className="btn">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={()=>setShowRules((prev)=>!prev)} > {showRules?"Hide":"show"} Rule</Button>
        </div>
<div>

        {showRules&&<Rules/>}
</div>

    </MainContainer>
  );
};


GamePLay.propTypes = {};

export default GamePLay;

const MainContainer = styled.div`
  .Top-Section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 4px;
  }
  .btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;
