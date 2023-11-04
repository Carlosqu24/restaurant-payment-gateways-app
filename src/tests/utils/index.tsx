// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import productsReducer from '../../redux/reducers/productsReducer';
import shoppingCartReducer from '../../redux/reducers/shoppingCartReducer';
import { store } from "../../redux/store/index"


export function renderWithProviders(
    ui,
    {
        preloadedState = {},
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
    
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}