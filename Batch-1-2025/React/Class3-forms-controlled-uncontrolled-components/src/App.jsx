import { forwardRef, useEffect, useRef, useState } from 'react'
import './App.css'
import { Form } from './conponents/Form'
import { ControlledInput } from './conponents/ControlledInput'
import { AdvanceForm } from './conponents/AdvanceForm'

// Passing ref like this before react 19
const InputWithForwardRef = forwardRef(({ type = "text", value = "" }, ref) => {
  return <input value={value} type={type} ref={ref} />
})

// Ref inside props object will work in react 19
const Input = ({ type = "text", value = "", ref }) => {
  return <input value={value} type={type} ref={ref} />
}

function App() {
  const element = useRef(null)
  const elementFW = useRef(null)

  useEffect(() => {
    console.log(element)
    console.log(elementFW)
    // element.current.focus()
    // setTimeout(() => {
    //   element.current.blur()
    //   element.current.value = "pablo"
    // }, 2000)
  }, [])

  const valueBeforeUpdateCallBack = (e) => {
    console.log(`value Before Update`, e)
    // setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const valueBeforeAfterCallBack = (e) => {
    console.log(`value After Update: ${e.target}`)
  }

  return (
    <div className='card'>
      <InputWithForwardRef value="pablo with forward ref" ref={elementFW} />
      <Input value="Input without forward ref" ref={element} />
      {/* <Input type="radio" value="pablo" />
      <Input type="password" value="pablo" />
      <Input type="number" value="22" />
      <Input type="email" value="22@22.com" />
      <Input type="search" value="22@22.com" />
      <input /> */}
      {/* <input />
      <input />
      <input />
      <input />
      <input />
      <input /> */}


      <ControlledInput
        valueBeforeUpdateCallBack={valueBeforeUpdateCallBack}
        valueBeforeAfterCallBack={valueBeforeAfterCallBack}
      />

      <Form />

      <AdvanceForm />
    </div>
  )
}

export default App
