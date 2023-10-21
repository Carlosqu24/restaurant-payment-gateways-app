import React from 'react'
import { ShoppingCartProduct } from '../../../models/product'

const shoppingCartProductCardStyles = {
  container: {
      classNames: "flex items-center py-2 px-2",
      cssStyles: { backgroundColor: "white", color: "black" }
  },
  image: {
      classNames: "h-24 w-24",
      cssStyles: {
          // height: "100px",
          // width: "100px"
      }
  },
  body: {
      classNames: "flex justify-between items-center pl-5 text-xs ",
      cssStyles: {
          width: "100%",
          backgroundColor: "white",
          color: "black"
      }
  },
  title: {
    classNames: " ",
    cssStyles: {}
},
  quantityButtonsContainer: {
      classNames: "flex md:flex-col xl:flex-row flex-col",
      cssStyles: {}
  },
  quantityButtons: {
      classNames: `
        xl:mr-10
        xl:mb-0

        md:mr-0 
        md:mb-2

        sm:mr-0
        sm:mb-2

        mb-2
      `,
      cssStyles: {}
  },
}

interface ShoppingCartProductCardProps {
  shoppingCartProduct: ShoppingCartProduct
  onIncrementCartProductQuanitity: Function
  onDecrementCartProductQuanitity: Function
}

const ShoppingCartProductCard = ({
  shoppingCartProduct,
  onIncrementCartProductQuanitity,
  onDecrementCartProductQuanitity
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
        className={shoppingCartProductCardStyles.image.classNames}
      />
      <div
        className={shoppingCartProductCardStyles.body.classNames}
        style={shoppingCartProductCardStyles.body.cssStyles}
      >
        <div
        >
          <h4 className={shoppingCartProductCardStyles.title.classNames}>{shoppingCartProduct.name}</h4>
          <span>${shoppingCartProduct.salePrice}</span>
          <p>{shoppingCartProduct.category}</p>
        </div>
        
        <div className={shoppingCartProductCardStyles.quantityButtonsContainer.classNames}>
          <button
            className={shoppingCartProductCardStyles.quantityButtons.classNames}
            onClick={() => onDecrementCartProductQuanitity(shoppingCartProduct.id)}
          >-</button>
          <span
            className={shoppingCartProductCardStyles.quantityButtons.classNames}
          >{shoppingCartProduct.quantity}</span>
          <button
            onClick={() => onIncrementCartProductQuanitity(shoppingCartProduct.id)}
          >+</button>
        </div>

        

        <button>x</button>
      </div>
    </div>
  )
}

export default ShoppingCartProductCard