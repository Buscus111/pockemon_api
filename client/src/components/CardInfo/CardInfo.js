import './CardInfo.css'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import getCardInfo from '../../redux/thunks/getCardInfo'
import getAllPockemonsThunk from '../../redux/thunks/getAllPockemons'

const OneCardWrapper = styled.div`{
  width: 40vw;
  hieght: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`

function CardInfo() {
  const dispatch = useDispatch()
  const currentCard = useSelector(state => state.currentCard);
  const { id } = useParams()
  const handlerUpdate = () => {
    dispatch(getAllPockemonsThunk())
    dispatch(getCardInfo(id))
  };
  //можно было выводить инфу всю вместо карточки, но на карточке и так все расписанно. 
  return (
    <OneCardWrapper>
      <img className="current-card-img" src={currentCard?.imageUrlHiRes} alt=""/>
      <button onClick={handlerUpdate}  type="button" className="btn btn-light mt-1">Update</button>
      <Link to="/cards">
        <button  type="button" className="btn btn-light mt-1">Back</button>
      </Link>
    </OneCardWrapper>
  )
}

export default CardInfo
