import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

const NumberSelector = ({selectedNumber,SetSelectedNumber,error,setError}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  
    const NumberSlectorHandler=(value)=>{
      SetSelectedNumber(value);
      setError("");
    }

  return (
    <NumbserSelectorContainer>
      <p className="error" >{error}</p>
    <div className="flex">
      {arrNumber.map((value, i) => (
          <Box
          isSelected={value == selectedNumber}
          key={i}
          onClick={() => NumberSlectorHandler(value)}
          >
          {value}
        </Box>
        // q k is fn men hum value pass kar rhe the is lie hum ne fn k andr hi ananomys fn ko use kia he
        ))}
    </div>
    <p>Select Number</p>
        </NumbserSelectorContainer>
  );
};

export default NumberSelector;

const NumbserSelectorContainer=styled.div`

display: flex;
flex-direction:column;
align-items: end;


.flex{
    display: flex;
    gap:25px

}
p{
    font-size: 26px;
    font-weight: 700;
    margin-top: 30px;
}
.error{
  color: red;
}

`;

const Box = styled.div`
  height: 42px;
  width: 42px;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
