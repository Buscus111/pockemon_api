import { combineReducers } from "redux"
import loadReducer from './loadReducer'
import cadrsReducer from './cardsReducer'


const rootReducer = combineReducers({
  loader: loadReducer,
  cards: cadrsReducer
})

export default rootReducer
