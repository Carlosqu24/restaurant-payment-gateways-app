// @ts-nocheck
import { createSlice, current } from '@reduxjs/toolkit'

import { ShoppingCartProduct } from "../../models/product"

// interface PurchaseDetails {
//     subtotal: 0,
//     taxAmount: 0,
//     fees: {
//       shippingFee: 0,
//       processingFee: 0
//     },
//     total: 0
//   }

export interface PurchaseDetails {
    subTotal: number
    taxAmount: number
    total: number
}

interface ShoppingCartState {
    dataList: ShoppingCartProduct[],
    isLoading: boolean,
    errorText: string | null,
    purchaseDetails: PurchaseDetails
}

const shoppingCartInitialState: ShoppingCartState = {
    dataList: [],
    isLoading: false,
    errorText: null,
    purchaseDetails: {
        subTotal: 0,
        taxAmount: 0,
        total: 0,
    }
}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: shoppingCartInitialState,
    reducers: {
        addShoppingCartProduct: (state, action) => {

            const newCartProduct: ShoppingCartProduct = {
                ...action.payload,
                quantity: 1,
                totalPrice: 1 * action.payload.salePrice
            }

            state.dataList.push(newCartProduct)


            // Calculate purchaseDetails

            const subTotal = state.dataList.reduce(
                (prev, actual) => prev + (actual.salePrice * actual.quantity),
                0
            )
            const taxAmount = subTotal * 0.13
            const total = subTotal + taxAmount

            state.purchaseDetails.subTotal = subTotal
            state.purchaseDetails.taxAmount = taxAmount
            state.purchaseDetails.total = total
        },
        incrementShoppingCartProductQuantity: (state, action) => {
            const cartProductId = action.payload
            const foundCartProduct = current(state).dataList.find(cartProduct => cartProduct.id === cartProductId)

            const newCartProductQuantity = foundCartProduct?.quantity + 1

            const editedCartProduct: ShoppingCartProduct = {
                ...foundCartProduct,
                quantity: newCartProductQuantity,
                totalPrice: newCartProductQuantity * foundCartProduct?.salePrice
            }

            const filteredData = current(state).dataList.filter(cartProduct => cartProduct.id !== cartProductId)

            const finalData = [
                ...filteredData,
                editedCartProduct
            ]

            state.dataList = finalData

            // Calculate purchaseDetails

            const subTotal = finalData.reduce(
                (prev, actual) => prev + (actual.salePrice * actual.quantity),
                0
            )
            const taxAmount = subTotal * 0.13
            const total = subTotal + taxAmount

            state.purchaseDetails.subTotal = subTotal
            state.purchaseDetails.taxAmount = taxAmount
            state.purchaseDetails.total = total
        },
        decrementShoppingCartProductQuantity: (state, action) => {
            const cartProductId = action.payload
            const foundCartProduct = current(state).dataList.find(cartProduct => cartProduct.id === cartProductId)


            const newCartProductQuantity =
                foundCartProduct?.quantity === 0
                    ? foundCartProduct?.quantity
                    : foundCartProduct?.quantity - 1

            const editedCartProduct: ShoppingCartProduct = {
                ...foundCartProduct,
                quantity: newCartProductQuantity,
                totalPrice: newCartProductQuantity * foundCartProduct?.salePrice
            }

            const filteredData = current(state).dataList.filter(cartProduct => cartProduct.id !== cartProductId)

            const finalData = [
                ...filteredData,
                editedCartProduct
            ]

            state.dataList = finalData

            // Calculate purchaseDetails

            const subTotal = finalData.reduce(
                (prev, actual) => prev + (actual.salePrice * actual.quantity),
                0
            )
            const taxAmount = subTotal * 0.13
            const total = subTotal + taxAmount

            state.purchaseDetails.subTotal = subTotal
            state.purchaseDetails.taxAmount = taxAmount
            state.purchaseDetails.total = total
        },
        resetShoppingCart: (state, action) => {
            state.dataList = shoppingCartInitialState.dataList
            state.errorText = shoppingCartInitialState.errorText
            state.isLoading = shoppingCartInitialState.isLoading
        },
    },
    extraReducers: () => {

    }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const { addShoppingCartProduct, incrementShoppingCartProductQuantity, decrementShoppingCartProductQuantity } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer