import React from 'react'
import { INCREMENT, DECREMENT, RESET } from './index'
import { connect } from 'react-redux'
import './styles.css'

const increment = () => {
  return {
    type: INCREMENT,
  }
}

const decrement = () => {
  return {
    type: DECREMENT,
  }
}

const reset = () => {
  return {
    type: RESET,
  }
}

const App = ({ count, increment, decrement, reset }) => {
  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
