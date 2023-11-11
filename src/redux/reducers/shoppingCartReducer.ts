// @ts-nocheck
import { createSlice, current } from '@reduxjs/toolkit'

import { ShoppingCartProduct, ShoppingCartProductUI } from "../../models/product"
import { products, shoppingCartProducts } from '../../db/product'
import { formatMoney, reverseFormatMoney } from '../../utils/money'
import { productUIToProductMapper, shoppingCartProductToShoppingCartProductUIMapper, shoppingCartProductUIToShoppingCartProductMapper } from '../../features/products/mappers'

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

export const shoppingCartReducerTestingEmptyState = shoppingCartInitialState

export const shoppingCartReducerTestingState = {
    dataList: shoppingCartProducts,
    errorText: "",
    isLoading: false,
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

            const product = productUIToProductMapper(action.payload)

            const newCartProduct: ShoppingCartProduct = {
                ...product,
                quantity: 1,
                totalPrice: 1 * product.salePrice
            }

            const newCartProductFormetted: ShoppingCartProductUI = shoppingCartProductToShoppingCartProductUIMapper(newCartProduct)

            state.dataList.push(newCartProductFormetted)



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
            const foundCartProduct =
                current(state)
                    .dataList
                    .find(cartProduct => cartProduct.id === cartProductId)

            const unformattedCartProduct = shoppingCartProductUIToShoppingCartProductMapper(foundCartProduct)

            const newCartProductQuantity = foundCartProduct?.quantity + 1

            const editedCartProduct: ShoppingCartProduct = {
                ...unformattedCartProduct,
                quantity: newCartProductQuantity,
                totalPrice: newCartProductQuantity * unformattedCartProduct?.salePrice
            }

            const formattedEditedCartProduct = shoppingCartProductToShoppingCartProductUIMapper(editedCartProduct)

            const filteredData = current(state).dataList.filter(cartProduct => cartProduct.id !== cartProductId)

            const finalData = [
                ...filteredData,
                formattedEditedCartProduct
            ]

            state.dataList = finalData



            // Calculate purchaseDetails
            const subTotal = finalData.reduce(
                (prev, actual) => prev + (
                    shoppingCartProductUIToShoppingCartProductMapper(actual).salePrice * actual.quantity),
                0
            )
            const taxAmount = subTotal * 0.13
            const total = subTotal + taxAmount

            state.purchaseDetails.subTotal = formatMoney(subTotal)
            state.purchaseDetails.taxAmount = formatMoney(taxAmount)
            state.purchaseDetails.total = formatMoney(total)
        },
        decrementShoppingCartProductQuantity: (state, action) => {
            const cartProductId = action.payload
            const foundCartProduct = current(state).dataList.find(cartProduct => cartProduct.id === cartProductId)

            const unformattedCartProduct = shoppingCartProductUIToShoppingCartProductMapper(foundCartProduct)


            const newCartProductQuantity =
                foundCartProduct?.quantity === 0
                    ? foundCartProduct?.quantity
                    : foundCartProduct?.quantity - 1

            const editedCartProduct: ShoppingCartProduct = {
                ...unformattedCartProduct,
                quantity: newCartProductQuantity,
                totalPrice: newCartProductQuantity * unformattedCartProduct?.salePrice
            }

            const formattedEditedCartProduct = shoppingCartProductToShoppingCartProductUIMapper(editedCartProduct)

            const filteredData = current(state).dataList.filter(cartProduct => cartProduct.id !== cartProductId)

            const finalData = [
                ...filteredData,
                formattedEditedCartProduct
            ]

            state.dataList = finalData



            // Calculate purchaseDetails
            const subTotal = finalData.reduce(
                (prev, actual) => prev + (
                    shoppingCartProductUIToShoppingCartProductMapper(actual)
                        .salePrice * actual.quantity),
                0
            )
            const taxAmount = subTotal * 0.13
            const total = subTotal + taxAmount

            state.purchaseDetails.subTotal = formatMoney(subTotal)
            state.purchaseDetails.taxAmount = formatMoney(taxAmount)
            state.purchaseDetails.total = formatMoney(total)
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