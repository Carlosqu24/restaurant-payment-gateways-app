import React from 'react'
import ShoppingCartProductCard from '../components/ShoppingCartProductCard';
import { ShoppingCartProduct } from '../../../models/product';
import { PurchaseDetails } from '../../../redux/reducers/shoppingCartReducer';

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
      classNames: "w-full mt-5 xl:mt-0 2xl:mt-0 bg-[#FFFFFF] color-[#000000] p-4",
      cssStyles: {}
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
              backgroundColor: "white",
              color: "black"
            }}
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