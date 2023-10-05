
export default class ProductPageObject {
  constructor(screen) {
    this.screen = screen
  }

    screen
  
  getAddToCartButton() {
    return this.screen.getAllByText("Añadir al carrito");
  }
}
