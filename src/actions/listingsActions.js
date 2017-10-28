import mockData from '../db/data.json';

export const UPDATE_LISTINGS = 'UPDATE_LISTINGS';
export const UPDATE_LISTING = 'UPDATE_LISTING';

export function updateListings(listings) {
  return {
    type: UPDATE_LISTINGS,
    payload: listings
  }
}

export function updateListing(listing) {
  return {
    type: UPDATE_LISTING,
    payload: listing
  }
}

//USE THIS FORMAT FOR REAL API CALLS

// export function fetchListings(listings) {
//   return dispatch => (
//     fetch(url)
//       .then(json => JSON.parse(json))
//       .then(data => dispatch(updateListings(data.goods)))
//       .catch(err => console.log(err))
//   )
// }


//FOR MOCK ASYNC CALLS 
export function fetchListings(listings) {
  return dispatch => (
    setTimeout(() => {
      dispatch(updateListings(mockData.goods))
    }, 1000)
  )
}

export function fetchListing(listing) {
  return dispatch => (
    setTimeout(() => {
      dispatch(updateListing(mockData.goods))
    }, 1000)
  )
}
