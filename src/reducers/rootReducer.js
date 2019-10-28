import { combineReducers } from 'redux'
import cart from './cartReducer'
import shelf from './shelfReducer'
import wishlist from './wishlistReducer'

export default combineReducers({
  cart,
  shelf,
  wishlist
})
