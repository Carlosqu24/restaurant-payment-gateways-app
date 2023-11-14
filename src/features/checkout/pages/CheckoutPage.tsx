import React from 'react'

import { PayPalButtons, PayPalScriptProvider, ReactPayPalScriptOptions } from "@paypal/react-paypal-js"
import { CONFIG } from '../../../config'
import { CreateOrderActions, CreateOrderData, OnApproveActions, OnApproveData } from '@paypal/paypal-js'

const reactPayPalScriptOptions = {
    "client-id": CONFIG.CLIENT_ID as string,

}

const CheckoutPage = () => {

    const createOrder = async (data: CreateOrderData, actions: CreateOrderActions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Sunflower",
                    amount: {
                        currency_code: "USD",
                        value: "20",
                    },
                },
            ],
        }).then((orderID) => {
                // setOrderID(orderID);
                console.log({orderID})
                return orderID;
            });
    };

    // check Approval
    const onApprove = async (data: OnApproveData, actions: OnApproveActions) => {
        return actions.order && actions.order.capture().then(function (details) {
            const { payer } = details;
            console.log({payer})
            // setSuccess(true);
        });
    };

  return (
    <PayPalScriptProvider options={reactPayPalScriptOptions}>
        <h1>Checkout</h1>

        <PayPalButtons
            style={{layout: "vertical"}}
            createOrder={createOrder}
            onApprove={onApprove}
        />
    </PayPalScriptProvider>
  )
}

export default CheckoutPage