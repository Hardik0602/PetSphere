import React from 'react'
import { Link } from 'react-router-dom'
const ProductListing = ({ product }) => {
    return (
        <Link
            to={`/product/${product.id}`}
            className='text-gray-700 cursor-pointer border border-gray-400 rounded-b-md'>
            <div className='overflow-hidden'>
                <img src={product.image} alt="product_image" />
            </div>
            <div className='pl-2 pb-2'>
                <p className='pt-3 pb-1 text-sm'>{product.name}</p>
                <p className='text-sm font-medium'>Rs.{product.price}</p>
            </div>
        </Link>
    )
}
export default ProductListing