import React from 'react'
import { ShoppingCartProduct } from '../../../models/product'

const shoppingCartProductCardStyles = {
  container: {
      classNames: "flex items-center py-2 px-6",
      cssStyles: { backgroundColor: "white", color: "black" }
  },
  image: {
      classNames: "",
      cssStyles: {
          height: "100px",
          width: "100px"
      }
  },
  body: {
      classNames: "flex justify-between items-center pl-5",
      cssStyles: {
          width: "100%",
          backgroundColor: "white",
          color: "black"
      }
  },
  quantityButtonsContainer: {
      classNames: "flex md:flex-col xl:flex-row flex-col",
      cssStyles: {}
  },
  quantityButtons: {
      classNames: "xl:mr-10 md:mr-0 sm:mr-10",
      cssStyles: {}
  },
}

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
        
        <div className={shoppingCartProductCardStyles.quantityButtonsContainer.classNames}>
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