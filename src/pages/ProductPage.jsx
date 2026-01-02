import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../../React Jobs/src/components/Spinner'
import { toast } from 'react-toastify'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/products/${id}`)
        const data = await res.json()
        setProduct(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
        toast.error('Error Fetching Product')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [])
  const addToCart = async () => {
    try {
      const res = await fetch('http://localhost:5000/cart')
      const data = await res.json()
      const inCart = data.find(
        (item) => item.productID === product.id
      )
      if (inCart) {
        await fetch(`http://localhost:5000/cart/${inCart.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...inCart,
            quantity: inCart.quantity + 1
          })
        })
      } else {
        await fetch('http://localhost:5000/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            productID: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
          })
        })
      }
      toast.success('Added to cart')
    } catch (error) {
      console.error(error)
      toast.error('Error Adding to cart')
    }
  }
  return (
    <section>
      {loading
        ? <Spinner loading={loading} />
        : <div className='mt-5'>
          <div className='flex gap-12 flex-col sm:flex-row'>
            <div className='w-full sm:w-[50%]'>
              <img
                className='w-full'
                src={product.image}
                alt="product image" />
            </div>
            <div className='flex-1'>
              <h1 className='font-medium text-2xl'>{product.name}</h1>
              <div className='flex gap-1 mt-2'>
                <FaStar color='orange' size={15} />
                <FaStar color='orange' size={15} />
                <FaStar color='orange' size={15} />
                <FaStar color='orange' size={15} />
                <FaStarHalfAlt color='orange' size={15} />
              </div>
              <p className='mt-5 text-3xl font-medium'>Rs.{product.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{product.description}</p>
              <button
                onClick={addToCart}
                className='bg-black text-white px-8 py-3 mt-8 text-sm active:bg-gray-700'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>}
    </section>
  )
}
export default ProductPage