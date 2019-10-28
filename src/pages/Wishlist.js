import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as WishlistActions from '../actions/wishlistActions'

class Wishlist extends Component {
  render() {
    let wishItems = Object.keys(this.props.wishlist).map((item, index) => {
      return (
        <li key={index}>
          {item} ({this.props.wishlist[item]})
          <button onClick={() => this.props.removeFromWishes(item)}>
            💔
          </button>
        </li>
      )
    })
    return (
      <div>
        <h1>❤️ My Wishlist ❤️</h1>
        <ul>
          {wishItems}
        </ul>
        <button onClick={this.props.clearWishes}>Clear Wishes 💔</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist
  }
}

export default connect(mapStateToProps, WishlistActions)(Wishlist)
