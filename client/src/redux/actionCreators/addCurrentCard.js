import { ADD_CURRENT_CARD } from '../types/cards';

 const addAllCards = (cards) => {
  return {
    type: ADD_CURRENT_CARD, 
    payload: cards
  }
}

export default addAllCards
