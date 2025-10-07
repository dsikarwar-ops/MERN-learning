import { useState } from 'react'
import './App.css'

const numbers = [11, 12, 13, 14, 15]

const lists = numbers.map((num, id) => <div key={`${id}-${num}`} id={num} style={{ border: '1px solid yellow' }} className="card" >{num}</div>)


// Do not use nested ternery always use a render function with if else logic for more clearity
// const renderFunction = (show) => {
//   const res = '';

//   if(show) res += 12

//   return res
// }


function App() {

  const [show, setShow] = useState(0)

  // const list2 = numbers.map((num, id) => <div key={`${id}-${num}`} id={num} style={{ border: '1px solid yellow' }} className="card" >second {num}</div>)

  return (
    <>
      <button onClick={() => setShow(!show)} className="btn">
        {show ? 'hide' : 'show'}
      </button>
      
      {/* ternery operator */}
      {show ? lists : 'Nothing To render'}


      {/* {list2} */}

    </>
  )
}

export default App
