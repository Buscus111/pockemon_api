import styled from 'styled-components'
import { useEffect, useState } from 'react'
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
  const [count, setCount] = useState(9)

  useEffect(() => {
    dispatch(getAllPockemonsThunk())
  }, [dispatch])

  
  return (
    <CharactersCardsDiv>
      {
        cards && cards.map((el, i) => <Card key={el.id} card={el}/>  )
      }
    </CharactersCardsDiv>
  )
}

export default CardsList
