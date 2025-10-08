import { ControlledInput } from "./ControlledInput"

export const AdvanceForm = () => {

    const [formData, setFormData] = useState({})

    const valueBeforeUpdateCallBack = (e) => {
        console.log(`value Before Update`, e)
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e, `Form Values:`, formData)
    }

    return <form onSubmit={handleSubmit} className='card' action="">
        Name: <ControlledInput
            valueBeforeUpdateCallBack={valueBeforeUpdateCallBack}
            name="firstName" />


        Last Name: <ControlledInput
            valueBeforeUpdateCallBack={valueBeforeUpdateCallBack}
            name="lastName" />


        Email: <ControlledInput
            valueBeforeUpdateCallBack={valueBeforeUpdateCallBack}
            type="email" name="email" />


        Phone: <ControlledInput
            valueBeforeUpdateCallBack={valueBeforeUpdateCallBack}
            type="number" name="phoneNmber" />

        <button type="submit">Submit</button>
    </form>
}