import React from 'react'
import { ShoppingCartProduct } from '../../../models/product'
import { shoppingCartProductCardStyles } from './ShoppingCartProductCard.styles'

interface ShoppingCartProductCardProps {
  shoppingCartProduct: ShoppingCartProduct
  onIncrementCartProductQuanitity: Function
  onDecrementCartProductQuanitity: Function
}

const ShoppingCartProductCard = ({
  shoppingCartProduct
}: ShoppingCartProductCardProps) => {
  return (
    <div
      className={shoppingCartProductCardStyles.container.classNames}
      style={shoppingCartProductCardStyles.container.cssStyles}
    >
      <img
        src={shoppingCartProduct.imageUrl}
        alt=""
        style={shoppingCartProductCardStyles.image.cssStyles}
      />
      <div
        className={shoppingCartProductCardStyles.body.classNames}
        style={shoppingCartProductCardStyles.body.cssStyles}
      >
        <div>
          <h4>{shoppingCartProduct.name}</h4>
          <p>{shoppingCartProduct.category}</p>
        </div>
        
        <div >
          <button
            className={shoppingCartProductCardStyles.quantityButtons.classNames}
          >-</button>
          <span
            className={shoppingCartProductCardStyles.quantityButtons.classNames}
          >1</span>
          <button
          >+</button>
        </div>

        <span>${shoppingCartProduct.salePrice}</span>

        <button>x</button>
      </div>
    </div>
  )
}

export default ShoppingCartProductCard