// @ts-nocheck
import { createSlice, current } from '@reduxjs/toolkit'

import { ShoppingCartProduct } from "../../models/product"

interface ShoppingCartState {
    dataList: ShoppingCartProduct[],
    isLoading: boolean,
    errorText: string | null
}

const shoppingCartInitialState: ShoppingCartState = {
    dataList: [],
    isLoading: false,
    errorText: null
}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: shoppingCartInitialState,
    reducers: {
        addShoppingCartProduct: (state, action) => {
            state.dataList.push(action.payload)
        },
        incrementShoppingCartProductQuantity: (state, action) => {
            const cartProductId = action.payload
            const foundCartProduct = current(state).dataList.find(cartProduct => cartProduct.id === cartProductId)

            const editedCartProduct = {
                ...foundCartProduct,
                quantity: foundCartProduct?.quantity + 1
            }

            const filteredData = current(state).dataList.filter(cartProduct => cartProduct.id !== cartProductId)

            const finalData = [
                ...filteredData,
                editedCartProduct
            ]

            state.dataList = finalData
        },
        decrementShoppingCartProductQuantity: (state, action) => {
            const cartProductId = action.payload
            const foundCartProduct = current(state).dataList.find(cartProduct => cartProduct.id === cartProductId)

            const editedCartProduct = {
                ...foundCartProduct,
                quantity:
                    foundCartProduct?.quantity === 0
                        ? foundCartProduct?.quantity
                        : foundCartProduct?.quantity - 1
            }

            const filteredData = current(state).dataList.filter(cartProduct => cartProduct.id !== cartProductId)

            const finalData = [
                ...filteredData,
                editedCartProduct
            ]

            state.dataList = finalData
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

export const { addShoppingCartProduct, incrementShoppingCartProductQuantity } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer