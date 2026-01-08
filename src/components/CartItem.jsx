import React from 'react'
import { GoTrash } from 'react-icons/go'
const CartItem = ({ item, deleteItem, changeQuantity }) => {
    return (
        <div className='py-4 border-y text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
            <div className='flex items-start gap-6'>
                <img
                    src={item.image} alt="product image"
                    className='h-16 sm:h-20' />
                <div>
                    <p className='text-xs sm:text-lg font-medium'>{item.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                        <p>Rs.{item.price}</p>
                    </div>
                </div>
            </div>
            <input
                onChange={(e) => {
                    const value = Number(e.target.value)
                    if (value < 1 || value > 100 || isNaN(value)) {
                        return
                    }
                    changeQuantity(item, value)
                }}
                className='border max-w-15 px-1 sm:px-2 py-1'
                type="number" min={1} max={100} defaultValue={item.quantity} />
            <GoTrash
                size={20} className='cursor-pointer'
                onClick={() => deleteItem(item.id)} />
        </div>
    )
}
export default CartItem