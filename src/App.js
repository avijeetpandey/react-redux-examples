import React from 'react'
import { INCREMENT } from './index'
import { connect } from 'react-redux'
import './styles.css'

const incrementValue = () => {
  return {
    type: INCREMENT,
  }
}

const App = ({ count, increment }) => {
  console.log(count)
  console.log(increment)
  return (
    <main className="Counter">
      <p className="count">0</p>
      <section className="controls">
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </section>
    </main>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment() {
      dispatch(incrementValue())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
