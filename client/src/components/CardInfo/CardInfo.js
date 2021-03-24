import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const NavLink = styled(Link)`
  margin: 1vh;
  color: white;
  text-decoration: none;
  &:hover{
    border-bottom: 1px solid white; 
  }
`;

function CardInfo() {
  const { id } = useParams();
  const cards = useSelector(state => state.cards);
  const card = cards.filter(el => el.id === id)[0];
  console.log(card)
  return (
    <div>
      <NavLink to="/cards">Back</NavLink>
      <div>{card.imageUrl}</div>
      <div>{card.name}</div>
      <div>{card.hp}</div>
      <div></div>
    </div>
  )
}

export default CardInfo
