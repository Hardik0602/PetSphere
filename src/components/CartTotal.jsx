import React from 'react'
const CartTotal = ({ cart }) => {
    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity)
    }, 0)
    const shipping = Number((total * 0.09).toFixed(2))
    const grandTotal = total + shipping
    return (
        <div className='w-full'>
            <h2 className='text-2xl text-gray-500 font-extrabold'>Cart Total</h2>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>Rs.{total}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>Rs.{shipping}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>Rs.{grandTotal}</b>
                </div>
            </div>
        </div>
    )
}
export default CartTotal