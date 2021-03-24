import React from 'react'
import styled from 'styled-components'

const CreatorWrapper = styled.div`{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2vw;
  width: 100%;
}`
const CreatorDiv = styled.div`{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`
const ContactLink = styled.a`{
  color: white;
  text-decoration: none;
  &:hover{
    border-bottom: 1px solid white; 
  }
}`

function Info() {
  return (
    <CreatorWrapper>
      <CreatorDiv>
        <h3>Made by:</h3>
        <h2>Gasparyan Arman</h2>
      </CreatorDiv>
      <div>
        <h2>Contacts</h2> 
        <ul>
          <li><ContactLink href="https://t.me/buscus" rel='noreferrer' target="_blank">Telegram</ContactLink></li>
          <li><ContactLink href="https://github.com/Buscus111" rel='noreferrer' target="_blank">Github</ContactLink></li>
          <li><ContactLink href="https://www.linkedin.com/in/arman-gasparyan-aa688b208/" rel='noreferrer' target="_blank">LinkedIn</ContactLink></li>
        </ul>
      </div>
    </CreatorWrapper>
  )
}

export default Info
