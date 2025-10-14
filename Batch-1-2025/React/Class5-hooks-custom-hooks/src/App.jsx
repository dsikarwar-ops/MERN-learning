import { memo } from 'react'
import { useReducer } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'

const arr = [1, 2, 3, 4, 5]

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age':
      return {...state, age: state.age + 1}
    case 'decremented_age':
      return {...state, age: state.age - 1}
    default:
      return state
  }
}

const initialState = { age: 20 };

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  // let count = 0

  const handleUpdate = useCallback(() => {
    // (count = 1) + 1
    setCount(prev => prev + 1)
  }, [setCount])

  const handleUpdate1 = () => {
    // (count = 1) + 1
    setCount(count + 1)
  } // new ref address on every render -> space storage

  const renderArr = useMemo(() => arr.map(i => {
    for (let i = 0; i < 10000000; i++) {

    }
    return <li>{i * 5}</li>
  }), [arr])

  return (
    <>
      <div onClick={handleUpdate}>
        count: {count}
      </div>

      {renderArr}

      {/* Pure component 
    props
    callBackFunc, strings, states, handleUpdate
    ref -> address not changed -> do not rerender
    */}

      <div onClick={handleUpdate1}>
        count: {count}
      </div>
      <button onClick={() => dispatch({ type: 'incremented_age' })}>Add Age: {state?.age}</button >
      <div>Age: {state?.age}</div>

      <button onClick={() => dispatch({ type: 'decremented_age' })}>Reduce Age: {state?.age}</button >

    
    </>
  )
}

export default memo(App) // Pure component