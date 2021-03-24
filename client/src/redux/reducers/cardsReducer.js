import { ADD_ALL_CARDS } from '../types/cards'

const cadrsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ALL_CARDS:
      return action.payload.cards;
    default:
      return state;
  }
}

export default cadrsReducer
