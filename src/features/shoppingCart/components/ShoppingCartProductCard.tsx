import React from 'react'
import { ShoppingCartProduct } from '../../../models/product'

interface ShoppingCartProductCardProps {
    shoppingCartProduct: ShoppingCartProduct
    onIncrementCartProductQuanitity: Function
    onDecrementCartProductQuanitity: Function
}

const ShoppingCartProductCard = ({
  shoppingCartProduct
}: ShoppingCartProductCardProps) => {
  return (
    <div style={{ backgroundColor: "white", color: "black"}}>
      <h4>{shoppingCartProduct.name}</h4>
    </div>
  )
}

export default ShoppingCartProductCard