import {
  UPDATE_LISTINGS
} from '../actions/listingsActions';



const initialState = {
  listings: []
};

const listings = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_LISTINGS:
      return {
        ...state,
        listings: action.payload
      }
    default:
      return state;
  }
}

export default listings;