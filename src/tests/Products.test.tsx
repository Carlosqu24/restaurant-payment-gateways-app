//@ts-nocheck

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import {store} from "../redux/store/index"

import ProductsPage from "../features/products/pages/ProductsPage";
import ProductPageObject from "./pageObjects/ProductPageObject";
import { WrappedApp } from "../App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsReducerTestingState } from "../redux/reducers/productsReducer";
import shoppingCartReducer from "../redux/reducers/shoppingCartReducer";
import ProductsListContainer from "../features/products/containers/ProductsListContainer";

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
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

describe("ProductsList Component", () => {
  it("Shoud list the products", () => {
    const {container} = renderWithProviders(
      <ProductsListContainer />,
      {
       preloadedState: {
        products: productsReducerTestingState
       }
      }
    );

    const productsPage = new ProductPageObject(screen);

    // productsPage.hasNotAvailableProductsText()

    // screen.getAllByText("No hay productos disponibles")

    const s = screen.getAllByRole("heading", {value: "As"})

     expect(container).toMatchSnapshot()
    // expect(productsPage.getAddToCartButton()).toBeInTheDocument();
    // expect(productsPage.getAddToCartButton()).not.toBeNull();
  });
});
