import { result } from '../../data.json'
import { Card } from '../components/Card'


export const Home = () => {
    return (
        <div className='page'>
            {result.map(item => <Card {...item} />)}
        </div>
    )
}
