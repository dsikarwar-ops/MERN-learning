import { useState, useEffect } from 'react'
import './App.css'

function Counter({ parentCount, incrementParent, updateChildFromParent }) {
  const [childCount, setChildCount] = useState(0)

  const incrementChild = () => {
    setChildCount(prev => prev + 1)
  }

  return (
    <div className="card">
      {/* Child updates parent state */}
      <button onClick={incrementParent}>
        Parent Count is {parentCount} (Click to update from Child)
      </button>

      <p>Child Count is: {childCount}</p>

      {/* Parent updates child state */}
      <button onClick={() => updateChildFromParent(setChildCount)}>
        Update Child From Parent
      </button>

      {/* Direct child state update */}
      <button onClick={incrementChild}>
        Increment Child Count
      </button>
    </div>
  )
}

function App() {
  const [parentCount, setParentCount] = useState(0)

  useEffect(() => {
    console.log('Parent count changed:', parentCount)
  }, [parentCount])

  const incrementParent = () => {
    setParentCount(prev => prev + 1)
  }

  const updateChildFromParent = (setChildCount) => {
    setChildCount(prev => prev + 10)
  }

  return (
    <>
      <h1>React Parent ↔ Child Example</h1>

      <Counter
        parentCount={parentCount}
        incrementParent={incrementParent}
        updateChildFromParent={updateChildFromParent}
      />

      {/* Direct parent state update */}
      <button onClick={incrementParent}>
        Increment Parent from Parent
      </button>
    </>
  )
}

export default App
