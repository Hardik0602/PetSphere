import React, { useEffect, useState } from 'react'
import ProductListing from './ProductListing'
import Spinner from '../../../React Jobs/src/components/Spinner'
const ProductListings = ({ isHome = false }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/products')
        const data = await res.json()
        setProducts(isHome ? data.slice(-6) : data)
        // console.log(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])
  return (
    <section className='my-5'>
      <h2 className='text-3xl text-gray-500 mb-3 font-bold text-center'>
        {isHome ? 'Latest Products' : 'Browse Products'}
      </h2>
      {loading
        ? <Spinner loading={loading} />
        : <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {products.map((product) => (
            <ProductListing key={product.id} product={product} />
          ))}
        </div>}
    </section>
  )
}
export default ProductListings