import { ADD_CURRENT_CARD } from '../types/cards'

const cadrsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CURRENT_CARD:
      return {...action.payload.card};
    default:
      return state;
  }
}

export default cadrsReducer
