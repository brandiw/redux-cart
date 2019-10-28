import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as CartActions from '../actions/cartActions'
import * as ShelfActions from '../actions/shelfActions'
import { addToWishes } from '../actions/wishlistActions'

class Shelf extends Component {
  state = {
    newStockItem: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addToShelf(this.state.newStockItem)
    this.setState({ newStockItem: '' })
  }

  render() {
    let shelfItems = this.props.shelf.map((item, index) => {
      return (
        <li key={index}>
          <button onClick={() => this.props.addToCart(item)}>🛒</button>
          <button onClick={() => this.props.addToWishes(item)}>❤️</button>
          {item}
        </li>
      )
    })

    return (
      <div>
        <h1>Shelf</h1>
        <ul>
          {shelfItems}
        </ul>
        <hr />
        <h2>Add Stock</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newStockItem}
            onChange={e => this.setState({ newStockItem: e.target.value })}
          />
          <input type="submit" value="Add New Stock" />
        </form>
      </div>
    )
  }
}

// Take the state from the store; map it (add it) to the props for this component
const mapStateToProps = (state) => {
  return {
    shelf: state.shelf
  }
}

export default connect(mapStateToProps, {
  addToShelf: ShelfActions.addToShelf,
  addToCart: CartActions.addToCart,
  addToWishes
})(Shelf)
