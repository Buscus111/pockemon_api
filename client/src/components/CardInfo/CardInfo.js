import './CardInfo.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const OneCardWrapper = styled.div`{
  width: 40vw;
  hieght: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`

function CardInfo() {
  const currentCard = useSelector(state => state.currentCard);
  //можно было выводить инфу всю вместо карточки, но на карточке и так все расписанно. 
  return (
    <OneCardWrapper>
      <img className="current-card-img" src={currentCard?.imageUrlHiRes} alt=""/>
      <Link to="/cards">
        <button  type="button" className="btn btn-light mt-5">Back</button>
      </Link>
    </OneCardWrapper>
  )
}

export default CardInfo
