import React, { useEffect, useState } from 'react'
import Empty from './../assets/no_results.jpg'
import { toast } from 'react-toastify'
import Spinner from './../components/Spinner'
import CartItem from './../components/CartItem'
import CartTotal from '../components/CartTotal'
const CartPage = () => {
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch('http://localhost:5000/cart')
        const data = await res.json()
        setCart(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
        toast.error('Error Fetching Cart')
      } finally {
        setLoading(false)
      }
    }
    fetchCart()
  }, [])
  const deleteItem = async (id) => {
    setLoading(true)
    try {
      await fetch(`http://localhost:5000/cart/${id}`, {
        method: 'DELETE'
      })
      setCart(prev => prev.filter(item => item.id != id))
    } catch (error) {
      console.log(error)
      toast.error('Error Removing from Cart')
    } finally {
      setLoading(false)
    }
  }
  const changeQuantity = async (item, newQuantity) => {
    try {
      await fetch(`http://localhost:5000/cart/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...item,
          quantity: newQuantity
        })
      })
      setCart(prev =>
        prev.map(cartItem =>
          cartItem.id == item.id ? { ...cartItem, quantity: newQuantity } : cartItem
        )
      )
    } catch (error) {
      console.log(error)
      toast.error('Error Updating Quantity')
    }
  }
  return (
    <section>
      <h2 className='text-3xl text-gray-500 mb-3 font-extrabold text-center'>Your Cart</h2>
      {
        loading
          ? <Spinner loading={loading} />
          : cart.length == 0
            ? <div className='flex justify-center'>
              <img
                src={Empty} alt="empty cart"
                className='h-60 sm:h-96' />
            </div>
            : <div>
              {cart.map((item) => (
                <CartItem item={item} key={item.id}
                  deleteItem={deleteItem}
                  changeQuantity={changeQuantity} />
              ))}
              <div className='flex justify-end my-20'>
                <div className='w-full sm:w-112.5'>
                  <CartTotal cart={cart} />
                  <div className='w-full text-end'>
                    <button className='bg-black hover:bg-gray-700 text-white text-sm my-8 px-8 py-3'>Proceed to Checkout</button>
                  </div>
                </div>
              </div>
            </div>
      }
    </section>
  )
}
export default CartPage