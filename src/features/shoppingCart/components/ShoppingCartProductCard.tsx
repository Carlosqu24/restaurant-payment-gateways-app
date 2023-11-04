import React from 'react'
import { ShoppingCartProduct } from '../../../models/product'

const shoppingCartProductCardStyles = {
  container: {
      classNames: "flex items-center py-[32px] px-[15px] border-b-solid border-b-1 border-white last:border-none",
      cssStyles: { backgroundColor: "transparent", color: "white" }
  },
  image: {
      classNames: "h-20 w-20 md:h-40 md:w-40 object-contain",
      cssStyles: {}
  },
  body: {
      classNames: "flex justify-between items-center pl-1 sm:pl-5 text-xs ",
      cssStyles: {
          width: "100%",
          backgroundColor: "transparent",
          color: "white"
      }
  },
  title: {
    classNames: " ",
    cssStyles: {}
},
  quantityButtonsContainer: {
      classNames: "w-[100px] sm:w-[100px] flex flex-row justify-between items-center border-solid border-1 border-white rounded-[64px]",
      cssStyles: {}
  },
  quantityButtons: {
      classNames: `mb-0`,
      cssStyles: {}
  },
  quantityMinusButton: {
    classNames: `ml-2 p-2`,
  cssStyles: {}
  },
  quantityPlusButton: {
    classNames: `mr-2 p-2`,
  cssStyles: {}
  }
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
          <div className='mb-[8px]'>
          <h4 className={shoppingCartProductCardStyles.title.classNames}>{shoppingCartProduct.name}</h4>
          <p>{shoppingCartProduct.category}</p>
          </div>

          <span>${shoppingCartProduct.salePrice} / unit</span>

          <div className='flex items-center mt-[16px]'>
            <div className={shoppingCartProductCardStyles.quantityButtonsContainer.classNames}>
              <button
                className={shoppingCartProductCardStyles.quantityMinusButton.classNames}
                onClick={() => onDecrementCartProductQuanitity(shoppingCartProduct.id)}
              >-</button>
              <span
              
              >{shoppingCartProduct.quantity}</span>
              <button
              className={shoppingCartProductCardStyles.quantityPlusButton.classNames}
                onClick={() => onIncrementCartProductQuanitity(shoppingCartProduct.id)}
              >+</button>
            </div>

            <span className='ml-[15px]'>Delete product</span>
          </div>
        </div>
        
       

        <span className='self-start'>${shoppingCartProduct.quantity * shoppingCartProduct.salePrice}</span>
      </div>
    </div>
  )
}

export default ShoppingCartProductCard