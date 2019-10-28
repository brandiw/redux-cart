import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Custom Components
import Cart from './pages/Cart'
import Home from './pages/Home'
import Shelf from './pages/Shelf'
import Wishlist from './pages/Wishlist'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shelf">Shelf</Link>
                    ({Object.keys(this.props.shelf).length})
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                    ({Object.keys(this.props.cart).reduce((acc, item) => acc + this.props.cart[item], 0)})
                  </li>
                  <li>
                    <Link to="/wishlist">Wishlist</Link>
                    ({Object.keys(this.props.wishlist).reduce((acc, item) => acc + this.props.wishlist[item], 0)})
                  </li>
                </ul>
              </nav>
            </header>
            <main className="content">
              <Route exact path="/" component={Home} />
              <Route exact path="/shelf" component={Shelf} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/wishlist" component={Wishlist} />
            </main>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(App)
