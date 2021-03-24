import addLoader from '../actionCreators/loader'
import removeLoader from '../actionCreators/loader'
import addAllCards from '../actionCreators/addAllCards'

const getAllPockemonsThunk = () => async (dispatch, getState) => {
  // dispatch(addLoader())

  const response = await fetch('https://api.pokemontcg.io/v1/cards')
  const pockemonsList = await response.json()
  // console.log(pockemonsList)
  dispatch(addAllCards(pockemonsList))
  // dispatch(removeLoader())
}

export default getAllPockemonsThunk
