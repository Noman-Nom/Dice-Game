import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";

const RoleDice = ({currentDice, rolDice}) => {


 


  return (
    <DiceContainer>
      <div className="dice" onClick={rolDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

RoleDice.propTypes = {};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;

  p {
    font-size: 24px;
    font-weight: 500;
  }
  .dice {
    cursor: pointer;
  }
`;
