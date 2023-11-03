//@ts-nocheck

export default class ProductPageObject {
  constructor(screen) {
    this.screen = screen
  }

  screen

  hasAllProductsTitles() {
    return this.screen.getAllByRole("heading", { level: 5, value: "a" })
  }

  allProductsWereRendered(product) {
    screen.getByText(product.name)
    screen.getByText(product.salePrice)
  }

  getAddToCartButton() {
    return this.screen.getAllByText("Añadir al carrito");
  }

  hasNotAvailableProductsText() {
    return this.screen.getByText("No hay productos disponibles")
  }
}
