import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../../React Jobs/src/components/Spinner'
import { toast } from 'react-toastify'
const ProductPage = () => {
  const { ID } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/products${ID}`)
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
  return (
    <section className='my-5'>
      {loading
        ? <Spinner loading={loading} />
        : <div></div>}
    </section>
  )
}
export default ProductPage