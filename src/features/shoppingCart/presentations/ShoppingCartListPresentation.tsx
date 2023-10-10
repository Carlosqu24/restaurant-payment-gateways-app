import React from 'react'
import ShoppingCartProductCard from '../components/ShoppingCartProductCard';
import { ShoppingCartProduct } from '../../../models/product';

const shoppingCartListContainer = {
  container: {
      classNames: 'flex flex-col sm:flex-col md:flex-col xl:flex-row',
      cssStyles: {}
  },
  list: {
      classNames: "grid xl:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4 2xl:pr-4 xl:pr-4 md:w-full xl:w-full sm:w-full xs:w-full",
      cssStyles: {}
  },
  orderDetails: {
      classNames: "w-full mt-5 xl:mt-0 2xl:mt-0",
      cssStyles: {}
  }
}

interface ShoppingCartListPresentationProps {
    shoppingCartList: ShoppingCartProduct[]
    onIncrementCartProductQuanitity: Function
    onDecrementCartProductQuanitity: Function
}

const ShoppingCartListPresentation = ({ 
    shoppingCartList,
    onIncrementCartProductQuanitity,
    onDecrementCartProductQuanitity 
}: ShoppingCartListPresentationProps) => {
    return (
        <div 
          className={shoppingCartListContainer.container.classNames}
        >
          <ul 
            className={shoppingCartListContainer.list.classNames}
            // style={{ width: "65%"}}
          >
            {shoppingCartList.length > 0 ? (
              shoppingCartList.map((product, index) => 
                  <ShoppingCartProductCard 
                      key={index} 
                      shoppingCartProduct={product}
                      onIncrementCartProductQuanitity={onIncrementCartProductQuanitity}
                      onDecrementCartProductQuanitity={onDecrementCartProductQuanitity}
                  />)
            ) : (
              <h2>No hay productos añadidos al carrito</h2>
            )}
          </ul>
          <div 
            style={{
              // width: "35%",
              backgroundColor: "white"
            }}
            className={shoppingCartListContainer.orderDetails.classNames}
          >
            <h2>Order Details</h2>
          </div>
        </div>
      );
}

export default ShoppingCartListPresentation