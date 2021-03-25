import './Card.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import getCardInfo from '../../redux/thunks/getCardInfo'



const CardWrapper = styled.div`{
  hieght: 20vh;
  margin: 1vw;
}`

function Card({card}) {

  const dispatch = useDispatch()
  const handlerCardInfo = (id) => {
    dispatch(getCardInfo(id))
  }
  return (
    <CardWrapper>
      <Link to={`/cards/${card.id}`}>
        <img onClick={() => handlerCardInfo(card.id)} className="card-img"  src={card.imageUrl} alt=""></img>
      </Link>
    </CardWrapper>
  )
}

export default Card
