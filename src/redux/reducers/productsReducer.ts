import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Product } from "../../models/product"
import { getAllProducts } from '../../services/product'

interface ProductsState {
  data: Product[],
  isLoading: boolean,
  errorText: string | null
}

const productsReducerInitialState: ProductsState = {
  data: [],
  isLoading: false,
  errorText: null
}

export const productsReducerTestingState = {
    data: [{
      id: 1,
      name: "Product 1",
      description: "Description 1",
      salePrice: 2,
      rating: 3,
      imageUrl: "",
      category: "Meats"
    }, {
      id: 2,
      name: "Product 2",
      description: "Description 1",
      salePrice: 6,
      rating: 7,
      imageUrl: "",
      category: "Meats"
    }],
    errorText: "",
    isLoading: false
}

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await getAllProducts()
    return response
  }
)

export const saveProduct = createAsyncThunk(
  'products/saveProduct',
  async (newProduct) => {

  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState: productsReducerInitialState,
  reducers: {
    createNewProduct: (state, action) => {
      state.data.push(action.payload)

      // console.log({ payload: action.payload, state: current(state) })
    },
    editProduct: () => {
      // const foundProduct = current(state).data.find(product => product.id === action.payload)
    },
    deleteProduct: () => {
      // const foundProduct = current(state).data.find(product => product.id === action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state: any, action) => {
      // console.log({ payload: action.payload })
      // state.entities.push(action.payload)
      state.data = action.payload

      // state.products.data = action.payload
    })
  }
})

export const { createNewProduct } = productsSlice.actions

export default productsSlice.reducer