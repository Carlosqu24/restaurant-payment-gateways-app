

import React from "react";
import { describe, it, expect } from "vitest";

import { renderWithProviders } from "./utils";

import ProductsListContainer from "../features/products/containers/ProductsListContainer";

import ProductPageObject from "./pageObjects/ProductPageObject";
import { productsReducerTestingState } from "../redux/reducers/productsReducer";
import { screen } from "@testing-library/react";
import { Product, ProductUI } from "../models/product";

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

    const productList: ProductUI[] = productsReducerTestingState.data

    expect(container).toMatchSnapshot()

    productsPage.allProductsWereRendered(productList)
  });
});
