export const addToCart = (item) => {
  return {
    type: 'ADD_CART_ITEM',
    item
  }
}

export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_CART_ITEM',
    item
  }
}

export const clearCart = () => {
  return { type: 'CLEAR_CART' }
}
