import { combineReducers } from "redux"
import loadReducer from './loadReducer'
import cadrsReducer from './cardsReducer'
import cardReducer from './cardReducer'


const rootReducer = combineReducers({
  loader: loadReducer,
  cards: cadrsReducer,
  currentCard: cardReducer
})

export default rootReducer
