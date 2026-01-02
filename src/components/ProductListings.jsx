import React, { useEffect, useState } from 'react'
import ProductListing from './ProductListing'
import Spinner from '../../../React Jobs/src/components/Spinner'
import No_Results from './../assets/no_results.jpg'
import { toast } from 'react-toastify'
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
        toast.error('Error Fetching Products')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])
  return (
    <section className='my-5'>
      <h2 className='text-3xl text-gray-500 mb-3 font-extrabold text-center'>
        {isHome ? 'Latest Products' : 'Browse Products'}
      </h2>
      {loading
        ? <Spinner loading={loading} />
        : products.length == 0
          ? <div className='flex justify-center h-50 md:h-96'>
            <img
              src={No_Results} alt="no results"
              className='h-full' />
          </div>
          : <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {products.map((product) => (
              <ProductListing key={product.id} product={product} />
            ))}
          </div>
      }
    </section>
  )
}
export default ProductListings