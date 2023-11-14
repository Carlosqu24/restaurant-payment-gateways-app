

import { Screen, fireEvent } from "@testing-library/react";
import { Product, ProductUI, ShoppingCartProductUI } from "../../models/product";

interface Options {
    shoppingCartList: ShoppingCartProductUI[]
}

export default class ShoppingCartPageObject {
    constructor(
        screen: Screen,
        options: Options
    ) {
        this.screen = screen
        this.options = options
    }

    screen: Screen
    options: Options

    getFirstShoppingCartProduct() {
        return this.options.shoppingCartList[0]
    }

    allProductsWereRenderedSuccessfully(
        firstShoppingCartProduct: ShoppingCartProductUI
    ) {
        this.firstProductWereRenderedSuccessfully(firstShoppingCartProduct)
    }

    firstProductWereRenderedSuccessfully(firstShoppingCartProduct: ShoppingCartProductUI) {
        this.screen.getByRole("heading", { name: firstShoppingCartProduct.name })
        this.screen.getByText(firstShoppingCartProduct.category)
        this.screen.getByText(`${firstShoppingCartProduct.salePrice} / unit`)
        this.screen.getAllByText("Delete product")
        this.screen.getByText(firstShoppingCartProduct.totalPrice)
    }

    noShoppingCartProductsTitle() {
        this.screen.getByText("No hay productos añadidos al carrito")
    }



    getFirstAddQuantityButton() {
        const addQuantityButtonList = this.screen.getAllByRole("button", { name: "+" })
        const firstAddQuantityButton = addQuantityButtonList[0]

        return firstAddQuantityButton
    }

    clickFirstShoppingCartProductAddQuantityButton() {
        const firstAddQuantityButton = this.getFirstAddQuantityButton()

        fireEvent.click(firstAddQuantityButton)
    }

    getFirstShoppingCartQuantityText() {
        return this.screen.getByTestId("shoppingCartProductQuantity-" + this.getFirstShoppingCartProduct().id).textContent
    }



    getFirstMinusQuantityButton() {
        const addQuantityButtonList = this.screen.getAllByRole("button", { name: "-" })
        const firstAddQuantityButton = addQuantityButtonList[0]

        return firstAddQuantityButton
    }

    clickFirstShoppingCartProductMinusQuantityButton() {
        const firstMinusQuantityButton = this.getFirstMinusQuantityButton()

        fireEvent.click(firstMinusQuantityButton)
    }



    getFirstDeleteButton() {
        const deleteProductButtonList = this.screen.getAllByRole("button", { name: "Delete product" })
        const firstDeleteProductButton = deleteProductButtonList[0]

        return firstDeleteProductButton
    }

    clickFirstShoppingCartProductDeleteButton() {
        const firstDeleteButton = this.getFirstDeleteButton()

        fireEvent.click(firstDeleteButton)
    }



    getAllShoppingCartProductsListRendered() {
        return this.screen.getAllByRole("article")
    }
}
