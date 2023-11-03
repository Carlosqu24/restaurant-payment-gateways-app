// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import productsReducer from '../../redux/reducers/productsReducer';
import shoppingCartReducer from '../../redux/reducers/shoppingCartReducer';
import { store } from "../redux/store/index"

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = configureStore({
            reducer: {
                products: productsReducer,
                shoppingCart: shoppingCartReducer
            },
            preloadedState,
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={ store }> { children } </Provider>;
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}