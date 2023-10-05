import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ProductsPage from "../features/products/pages/ProductsPage";
import ProductPageObject from "./pageObjects/ProductPageObject";

describe("ProductsList Component", () => {
  it("Shoud list the products", () => {
    render(<ProductsPage />);

    const productsPage = new ProductPageObject(screen);

    // expect(productsPage.getAddToCartButton()).toBeInTheDocument();
    expect(productsPage.getAddToCartButton()).not.toBeNull();
  });
});
