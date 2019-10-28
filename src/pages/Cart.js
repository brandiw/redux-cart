import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as CartActions from '../actions/cartActions'

class Cart extends Component {
  render() {
    let cartItems = Object.keys(this.props.cart).map((item, index) => {
      return (
        <li key={index}>
          {item} ({this.props.cart[item]})
          <button onClick={() => this.props.removeFromCart(item)}>
            ✖️
          </button>
        </li>
      )
    })
    return (
      <div>
        <h1>Cart</h1>
        <ul>
          {cartItems}
        </ul>
        <button onClick={this.props.clearCart}>Clear All 🚫</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {
  clearCart: CartActions.clearCart,
  removeFromCart: CartActions.removeFromCart
})(Cart)
