import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getAllPockemonsThunk from '../../redux/thunks/getAllPockemons'
import Card from '../Card/Card'

const CharactersCardsDiv = styled.div`{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
}`

function CardsList() {
 const dispatch = useDispatch()
  const cards = useSelector(state => state.cards)
  useEffect(() => {
    dispatch(getAllPockemonsThunk())
  }, [])
  console.log(cards)
  return (
    <CharactersCardsDiv>
      {/* {cards && cards.map(el => <Card key={el.id} cards={el}/>)
      } */}

      {/* {cards[0].name} */}
    </CharactersCardsDiv>
  )
}

export default CardsList
