import { addLoader, removeLoader } from '../actionCreators/loader'
import addAllCards from '../actionCreators/addAllCards'

const getAllPockemonsThunk = () => async (dispatch, getState) => {
  // dispatch(addLoader())
  try {
    const response = await fetch('https://api.pokemontcg.io/v1/cards')
    const pockemonsList = await response.json()
    console.log(pockemonsList)
    await dispatch(addAllCards(pockemonsList))
    
  } catch (error) {
    console.log(error)
  }
  // dispatch(removeLoader())
}

export default getAllPockemonsThunk
