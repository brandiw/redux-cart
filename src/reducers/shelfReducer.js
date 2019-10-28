const initialState = [
  'Bananas',
  'Cheetos',
  'Chocolate Milk',
  'Oreos',
  'La Croix'
]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'STOCK_ITEM':
      return [...state, action.item]
    default:
      return state
  }
}
