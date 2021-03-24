import './Card.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div`{
  ${'' /* width: 10vw; */}
  hieght: 20vh;
  margin: 1vw;
}`

function Card({card}) {
  const handlerCardInfo = () => {

  }
  console.log(card)
  return (
    <CardWrapper>
      <Link to={`/cards/${card.id}`}>
        <img onClick={handlerCardInfo} className="card-img"  src={card.imageUrl} alt=""></img>
      </Link>
    </CardWrapper>
  )
}

export default Card
