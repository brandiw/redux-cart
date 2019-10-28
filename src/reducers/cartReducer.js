export default (state = {}, action) => {
  let newState = {...state}
  switch (action.type) {
    case 'ADD_CART_ITEM':
      if (newState[action.item]) {
        newState[action.item] += 1
      }
      else {
        newState[action.item] = 1
      }
      return newState
    case 'REMOVE_CART_ITEM':
      delete newState[action.item] // delete one key
      return newState
    case 'CLEAR_CART':
      return {}
    default:
      return state
  }
}
