import React from 'react'
import ShoppingCartProductCard from '../components/ShoppingCartProductCard';
import { ShoppingCartProduct } from '../../../models/product';
import { PurchaseDetails } from '../../../redux/reducers/shoppingCartReducer';

const shoppingCartListContainer = {
  container: {
      classNames: 'flex flex-col sm:flex-col md:flex-row xl:flex-row',
      cssStyles: {}
  },
  list: {
      classNames: "grid xl:grid-cols-1 md:grid-cols-1 md:w-full sm:grid-cols-1 gap-4 md:w-full xl:w-full sm:w-full xs:w-full",
      cssStyles: {}
  },
  orderDetails: {
      classNames: `
        w-full

        p-4
        mt-3 
        
        md:mt-0
        xl:mt-0 
        2xl:mt-0
        2xl:ml-3 
        xl:ml-3
        md:ml-3
        sm:ml-0
        
        
        bg-[#FFFFFF] 
        color-[#000000]
        
        xl:w-7/20
        w-full
      `,
      cssStyles: {
        // width: "35%",
        // width: "100%",
        // width: "30%",
        backgroundColor: "white",
        color: "black"
      }
  }
}

interface ShoppingCartListPresentationProps {
    shoppingCartList: ShoppingCartProduct[]
    purchaseDetails: PurchaseDetails
    onIncrementCartProductQuanitity: Function
    onDecrementCartProductQuanitity: Function
}

const ShoppingCartListPresentation = ({ 
    shoppingCartList,
    purchaseDetails,
    onIncrementCartProductQuanitity,
    onDecrementCartProductQuanitity 
}: ShoppingCartListPresentationProps) => {
    return (
        <div 
          className={shoppingCartListContainer.container.classNames}
        >
          <ul 
            className={shoppingCartListContainer.list.classNames}
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
            style={shoppingCartListContainer.orderDetails.cssStyles}
            className={shoppingCartListContainer.orderDetails.classNames}
          >
            <h2>Order Details</h2>
            <div className="flex justify-between">
              <p>Subtotal Amount</p>
              <p className='font-bold'>{purchaseDetails?.subTotal ?? 0}</p>
            </div>

            <div className="flex justify-between">
              <p>Taxes Amount</p>
              <p className='font-bold'>{purchaseDetails?.taxAmount ?? 0}</p>
            </div>


            <div className="flex justify-between">
              <p className='font-bold'>Total</p>
              <p className='font-bold'>{purchaseDetails?.total ?? 0}</p>
            </div>

            <button className='mt-6 w-full py-2 px-6 bg-black text-white'>Pay</button>
          </div>
        </div>
      );
}

export default ShoppingCartListPresentation