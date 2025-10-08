export const ControlledInput = ({
  // with {valueBeforeUpdateCallBack, valueBeforeAfterCallBack} callbacks
  //  we can get the state values in parent component
  valueBeforeUpdateCallBack = () => { },
  valueBeforeAfterCallBack = () => { },
  type = "text",
  value: vlue = "",
  // this will work in react 19 only -> use forwardref is below 19th version
  ref,
  name,
} = {}) => { // props
  const [value, setValue] = useState(vlue)

  const handlleInputValue = (e) => {
    valueBeforeUpdateCallBack(e)
    setValue(e.target.value)
    valueBeforeAfterCallBack(e)
  }
  return <input className='input' onChange={handlleInputValue} value={value} type={type} ref={ref} name={name} />
}