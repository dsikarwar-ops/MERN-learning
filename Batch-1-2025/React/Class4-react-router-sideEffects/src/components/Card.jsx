import { Link, useNavigate } from "react-router-dom"

const Wrapper = ({
    link = '',
    useNavigator,
    children,
    ...rest
}) => {
    const nevigator = useNavigate();
    return useNavigator ? <div
        onClick={() => {
            nevigator(link)
        }}

        {...rest}>{children}</div> : <Link to={link} {...rest}>{children}</Link>
};

export const Card = ({
    product_id,
    product_name,
    price,
    stock_quantity,
    useNavigator = true
} = {}) => {

    return (
        <Wrapper
            link={`/product/${product_id}`}
            useNavigator={useNavigator}
            className='page__card'
        >
            <p>{product_name}</p>
            <p>$-{price}</p>
            <p>{stock_quantity > 0 ? 'In Stock' : "Sold Out"}</p>
        </Wrapper>
    )
}
