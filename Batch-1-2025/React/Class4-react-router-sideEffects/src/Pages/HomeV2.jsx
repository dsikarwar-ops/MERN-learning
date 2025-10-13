import { result } from '../../data.json'
import { Card } from '../components/Card'


export const HomeV2 = () => {
    return (
        <div className='page'>
            {result.map(item => <Card {...item} useNavigator={false} />)}
        </div>
    )
}
