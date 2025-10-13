import { useContext } from 'react'
import { result } from '../../data.json'
import { Card } from '../components/Card'
import { ThemeContext } from '../context'

export const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <button onClick={toggleTheme}>Toggle theme: {theme}</button>

            <div style={{ backgroundColor: theme }} className='page'>
                {result.map(item => <Card {...item} />)}
            </div>
        </>
    )
}
