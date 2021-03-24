import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getAllPockemonsThunk from '../../redux/thunks/getAllPockemons'
import Card from '../Card/Card'
import { addLoader, removeLoader } from '../../redux/actionCreators/loader'

const CharactersCardsDiv = styled.div`{
  width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}`

function CardsList() {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.cards)
  const [count, setCount] = useState(9)

  console.log(count)

  const hadlerUpdate = () => {
    dispatch(addLoader())
    setTimeout(() => {
      dispatch(removeLoader())
    }, 1000);
    setCount(Math.floor(Math.random() * 90  + 9))
  }

  useEffect(() => {
    dispatch(getAllPockemonsThunk())
  }, [])

  
  return (
    <>
    <button onClick={hadlerUpdate}>New Pockemons!</button>
    <CharactersCardsDiv>
      {
        cards && cards.map((el, i) => (i >= count - 9) && (i <= count) ? <Card key={el.id} card={el}/> : null  )
      }
    </CharactersCardsDiv>
    </>
  )
}

export default CardsList
