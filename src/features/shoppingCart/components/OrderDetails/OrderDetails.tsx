import React from 'react'
import { PurchaseDetails } from '../../../../redux/reducers/shoppingCartReducer'

const orderDetailsStyles = {
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

interface OrderDetailProps {
    purchaseDetails: PurchaseDetails
}

const OrderDetails = ({ purchaseDetails }: OrderDetailProps) => {
  return (
    <div 
            style={orderDetailsStyles.orderDetails.cssStyles}
            className={orderDetailsStyles.orderDetails.classNames}
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
  )
}

export default OrderDetails