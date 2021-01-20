import React from 'react'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

const INCREMENT = 'INCREMENT'

const incrementValue = () => ({
  type: INCREMENT,
})

const initialState = {
  count: 0,
}

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    }
  }

  return state
}

const store = createStore(reducer)

const CounterApp = () => {
  return (
    <>
      <main className="Counter">
        <p className="count">0</p>
        <section className="controls">
          <button>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    </>
  )
}

export default CounterApp
