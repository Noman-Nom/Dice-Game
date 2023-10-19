import React from 'react'
import { styled } from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
      
    </RulesContainer>
  )
}

export default Rules


const RulesContainer = styled.div`
background: #FBF1F1;
padding: 25px;
max-width: 800px;
margin: 0 auto;
        h2{
            font-size: 25px;
        }
        .text{
            margin-top:14px
        }

`;
