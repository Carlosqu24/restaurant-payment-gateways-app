import { Product } from "../../models/product"

interface ProductsState {
    data: Product[],
    isLoading: boolean,
    errorText: string | null
}

const initialState = {
    data: [],
    isLoading: false,
    errorText: null
}