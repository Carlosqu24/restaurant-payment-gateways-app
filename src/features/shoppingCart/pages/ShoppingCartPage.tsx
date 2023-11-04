import React from 'react'
import ShoppingCartListContainer from '../containers/ShoppingCartListContainer'

const ShoppingCartPage = () => {
  return (
    <div>
        <h1 className='text-[24px] font-bold'>Shopping Cart</h1>
        
        <ShoppingCartListContainer />
    </div>
  )
}

export default ShoppingCartPage