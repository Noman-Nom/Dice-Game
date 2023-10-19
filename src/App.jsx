import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";
import StartGame from './Components/StartGame';
import GamePLay from './Components/GamePLay';


// just for demo
// const Button = styled.button`
// background-color: black;
// color: yellow;
// `;

const App = props => {
    const [isGameStarted, setISGameStarted]=useState(false);

    const toggleGamePlay=()=>{

        setISGameStarted((prev)=>!prev)
    };
  return (
    <div>
      {/* <Button>This is button</Button> */}
      {isGameStarted?<GamePLay/>:<StartGame toggle={toggleGamePlay} />}
      {/* <StartGame/> */}
    </div>
  )
}

App.propTypes = {

}

export default App
