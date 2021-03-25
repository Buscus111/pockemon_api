import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import getAllPockemonsThunk from '../../redux/thunks/getAllPockemons'
import Card from '../Card/Card'

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

  const hadlerUpdate = () => {
    dispatch(getAllPockemonsThunk())
  }

  
  return (
    <>
    <button onClick={hadlerUpdate} type="button" className="btn btn-light">Get Pockemons!</button>
    <CharactersCardsDiv>
      {
        cards && cards.map((el, i) => <Card key={el.id} card={el}/> )
      }
    </CharactersCardsDiv>
    </>
  )
}

export default CardsList
