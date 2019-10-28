export const addToWishes = item => {
  return {
    type: 'ADD_WISH_ITEM',
    item
  }
}

export const removeFromWishes = item => {
  return {
    type: 'REMOVE_WISH_ITEM',
    item
  }
}

export const clearWishes = () => {
  return { type: 'CLEAR_WISHES' }
}
