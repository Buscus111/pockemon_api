import { ADD_ALL_CARDS } from '../types/cards';

 const addAllCards = (cards) => {
  return {
    type: ADD_ALL_CARDS, 
    payload: cards
  }
}

export default addAllCards
