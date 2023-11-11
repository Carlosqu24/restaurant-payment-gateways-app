import React from 'react'
import { PurchaseDetails } from '../../../../redux/reducers/shoppingCartReducer'

const orderDetailsStyles = {
    orderDetails: {
        classNames: `
          w-full
          h-fit
  
          lg:p-4
          p-0
          mt-3 
          
          md:mt-0
          xl:mt-0 
          2xl:mt-0
          2xl:ml-3 
          xl:ml-3
          lg:ml-3
          ml-0
          
          
          bg-[transparent] 
          color-[#000]
          
          xl:w-12/20

        `,
        cssStyles: {
          // width: "35%",
          // width: "100%",
          // width: "30%",

          backgroundColor: "transparent",
          color: "white",
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
            <h2 className='font-bold text-[18px] mb-[12px]'>Order Details</h2>

            <div className="flex justify-between text-[15px] text-[#d1d1d1] mb-[6px]">
              <p>Subtotal Amount</p>
              <p data-testid="purchaseDetails-subtotal" className='font-bold'>{purchaseDetails?.subTotal ?? 0}</p>
            </div>

            <div className="flex justify-between text-[15px] text-[#d1d1d1] mb-[6px]">
              <p>Taxes Amount</p>
              <p data-testid="purchaseDetails-taxAmount" className='font-bold'>{purchaseDetails?.taxAmount ?? 0}</p>
            </div>

            <div className="flex justify-between mt-[14px] py-[14px] border-t-solid border-t-1 border-white">
              <p className='font-bold text-[18px]'>Total</p>
              <p data-testid="purchaseDetails-total" className='font-bold text-[18px]'>{purchaseDetails?.total ?? 0}</p>
            </div>

            <button className='mt-6 w-full py-2 px-6 bg-black text-white'>Pay</button>
          </div>
  )
}

export default OrderDetails