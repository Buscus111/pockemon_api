import React from 'react'
import styled from 'styled-components'

const CreatorWrapper = styled.div`{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2vw;
  width: 100%;
  height: 80vh;
}`
const CreatorDiv = styled.div`{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`
const ContactDiv = styled.div`{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 1vw;
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
      <ContactDiv>
        <h2>Contacts</h2> 
        <ul>
          <li><ContactLink href="https://t.me/buscus" rel='noreferrer' target="_blank">Telegram</ContactLink></li>
          <li><ContactLink href="https://github.com/Buscus111" rel='noreferrer' target="_blank">Github</ContactLink></li>
          <li><ContactLink href="https://www.linkedin.com/in/arman-gasparyan-aa688b208/" rel='noreferrer' target="_blank">LinkedIn</ContactLink></li>
        </ul>
      </ContactDiv>
    </CreatorWrapper>
  )
}

export default Info
