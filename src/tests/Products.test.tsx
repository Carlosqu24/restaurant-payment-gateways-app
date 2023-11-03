

import React from "react";
import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "./utils";
import ProductPageObject from "./pageObjects/ProductPageObject";

import { productsReducerTestingState } from "../redux/reducers/productsReducer";

import ProductsListContainer from "../features/products/containers/ProductsListContainer";


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

    const firstProduct = productsReducerTestingState.data[0]

    productsPage.allProductsWereRendered(firstProduct)
  });
});
