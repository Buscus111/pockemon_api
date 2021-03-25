import { addLoader, removeLoader } from '../actionCreators/loader'
import addCurrentCard from '../actionCreators/addCurrentCard'

const getCardInfo = (id) => async (dispatch, getState) => {
  dispatch(addLoader())
  try {
    const response = await fetch(`https://api.pokemontcg.io/v1/cards/${id}`)
    const cardInfo = await response.json()

    dispatch(addCurrentCard(cardInfo))
  } catch (error) {
    console.log(error)
  }
  dispatch(removeLoader())
}

export default getCardInfo
