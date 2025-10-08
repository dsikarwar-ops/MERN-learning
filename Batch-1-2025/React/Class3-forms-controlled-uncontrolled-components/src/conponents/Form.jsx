import { useState } from "react"

export const Form = () => {
    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [form, setForm] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            name,
            lastName,
            email,
            phone,
            form
        })
    }

    const handleChange = (e) => {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    return <div>
        <form onSubmit={handleSubmit} className='card' action="">
            Name: <input type="text" onChange={(e) => setName(e.target.value)} />
            Last Name: <input type="text" onChange={(e) => setlastName(e.target.value)} />
            Email: <input type="text" onChange={(e) => setEmail(e.target.value)} />
            Phone: <input type="text" onChange={(e) => setPhone(e.target.value)} />

            <button type="submit">Submit</button>
        </form>

        <form onSubmit={handleSubmit} className='card' action="">
            Name: <input name="name" type="text" onChange={handleChange} />
            Last Name: <input name="lastName" type="text" onChange={handleChange} />
            Email: <input name="email" type="text" onChange={handleChange} />
            Phone: <input name="phone" type="text" onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>
    </div>
}