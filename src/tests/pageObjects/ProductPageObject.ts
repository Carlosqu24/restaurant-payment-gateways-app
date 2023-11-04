// @ts-nocheck

import { Screen } from "@testing-library/react";
import { Product, ProductUI } from "../../models/product";

export default class ProductPageObject {
  constructor(screen: Screen) {
    this.screen = screen
  }

  screen: Screen

  hasAllProductsTitles() {
    return this.screen.getAllByRole("heading", { level: 5, value: "a" })
  }

  allProductsWereRendered(productsList: ProductUI[]) {
    productsList.map(product => {
      this.screen.getByText(product.name)
      this.screen.getByText(product.salePrice)
    })
  }

  getAddToCartButton() {
    return this.screen.getAllByText("Añadir al carrito");
  }

  hasNotAvailableProductsText() {
    return this.screen.getByText("No hay productos disponibles")
  }
}
