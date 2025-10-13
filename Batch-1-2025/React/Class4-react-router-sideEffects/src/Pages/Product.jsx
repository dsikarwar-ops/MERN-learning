import { useParams } from "react-router-dom"
import { result } from '../../data.json'

export const Product = () => {

  const { product_id } = useParams()
  const {
    product_name,
    price,
    stock_quantity,
    description
} = result.find(item => item.product_id === +product_id) || {};
  
  return (
    <div className='product-page'>
      <div>Name {product_name}</div>
      <div>Price $-{price}</div>
      <div>Description $-{description}</div>
      <div>{stock_quantity ? 'In-Stock' : 'Out of Stock'}</div>
    </div>
  )
}
