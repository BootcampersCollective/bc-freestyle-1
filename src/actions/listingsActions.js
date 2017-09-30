export const UPDATE_LISTINGS = 'UPDATE_LISTINGS';

export function updateListings(listings) {
  return {
    type: UPDATE_LISTINGS,
    payload: listings
  }
}
