

import React from "react";
import { describe, it, expect } from "vitest";
import {fireEvent, getByRole, screen} from "@testing-library/react"

import { renderWithProviders } from "./utils";

import ShoppingCartListContainer from "../features/shoppingCart/containers/ShoppingCartListContainer";
import { shoppingCartReducerTestingEmptyState, shoppingCartReducerTestingState } from "../redux/reducers/shoppingCartReducer";
import ProductsListContainer from "../features/products/containers/ProductsListContainer";
import { productsReducerTestingState } from "../redux/reducers/productsReducer";
import { ProductUI } from "../models/product";
import { shoppingCartProductUIToShoppingCartProductMapper } from "../features/products/mappers";
import { formatMoney } from "../utils/money";

describe("ShoppingCart Component", () => {
  describe("ShoppingCartList", () => {
    it("Should list the products successfully", () => {
      const {container} = renderWithProviders(
        <ShoppingCartListContainer />,
        {
         preloadedState: {
          shoppingCart: shoppingCartReducerTestingState
         }
        }
      );
  
      const shoppingCartDataList = shoppingCartReducerTestingState.dataList
  
      screen.getByRole("heading", { name: shoppingCartDataList[0].name })
      screen.getByText(shoppingCartDataList[0].category)
      screen.getByText(`${shoppingCartDataList[0].salePrice} / unit`)
  
      // screen.getByRole("")
      screen.getAllByText("Delete product")
  
      screen.getByText(shoppingCartDataList[0].totalPrice)
    });
  
    it("Should render no cart items text", () => {
      const {container} = renderWithProviders(
        <ShoppingCartListContainer />,
        {
         preloadedState: {
          shoppingCart: shoppingCartReducerTestingEmptyState
         }
        }
      );
  
      screen.getByText("No hay productos añadidos al carrito")    
    });
  
    describe("Increment product quantity", () => {
      it("Should increment cart quantity item in 1", () => {
        const {container} = renderWithProviders(
          <ShoppingCartListContainer />,
          {
           preloadedState: {
            shoppingCart: shoppingCartReducerTestingState
           }
          }
        );
    
        const shoppingCartDataList = shoppingCartReducerTestingState.dataList
        const firstShoppingCartProduct = shoppingCartDataList[0]
    
        const addQuantityButtonList = screen.getAllByRole("button", { name: "+" })
        const firstAddQuantityButton = addQuantityButtonList[0]
        
        fireEvent.click(firstAddQuantityButton)
        
        const firstShoppingCartQuantity = screen.getByTestId("shoppingCartProductQuantity-" + firstShoppingCartProduct.id)
    
        expect(
          firstShoppingCartQuantity.textContent
        ).toBe(
          `${firstShoppingCartProduct.quantity + 1}`
        )
      });
    
      it("Should increment cart quantity item in 5", () => {
        const {container} = renderWithProviders(
          <ShoppingCartListContainer />,
          {
           preloadedState: {
            shoppingCart: shoppingCartReducerTestingState
           }
          }
        );
    
        const shoppingCartDataList = shoppingCartReducerTestingState.dataList
        const firstShoppingCartProduct = shoppingCartDataList[0]
    
        const addQuantityButtonList = screen.getAllByRole("button", { name: "+" })
        const firstAddQuantityButton = addQuantityButtonList[0]
        
        fireEvent.click(firstAddQuantityButton)
        fireEvent.click(firstAddQuantityButton)
        fireEvent.click(firstAddQuantityButton)
        fireEvent.click(firstAddQuantityButton)
        fireEvent.click(firstAddQuantityButton)
        
        const firstShoppingCartQuantity = screen.getByTestId("shoppingCartProductQuantity-" + firstShoppingCartProduct.id)
    
        expect(
          firstShoppingCartQuantity.textContent
        ).toBe(
          `${firstShoppingCartProduct.quantity + 5}`
        )
      });

      it("Shouldn't change cart item position when qunaitity is updated", () => {
        expect(true).toBe(true)
      })
    })
  
    describe("Decrement product quantity", () => {
      it("Should decrement cart quantity item in 1 after increment in 1", () => {
        const {container} = renderWithProviders(
          <ShoppingCartListContainer />,
          {
           preloadedState: {
            shoppingCart: shoppingCartReducerTestingState
           }
          }
        );
    
        const shoppingCartDataList = shoppingCartReducerTestingState.dataList
        const firstShoppingCartProduct = shoppingCartDataList[0]
    
        const addQuantityButtonList = screen.getAllByRole("button", { name: "+" })
        const firstAddQuantityButton = addQuantityButtonList[0]
    
        const minusQuantityButtonList = screen.getAllByRole("button", { name: "-" })
        const firstMinusQuantityButton = minusQuantityButtonList[0]
        
        fireEvent.click(firstAddQuantityButton)
        fireEvent.click(firstMinusQuantityButton)
        
        const firstShoppingCartQuantity = screen.getByTestId("shoppingCartProductQuantity-" + firstShoppingCartProduct.id)
    
        expect(
          firstShoppingCartQuantity.textContent
        ).toBe(
          `${firstShoppingCartProduct.quantity}`
        )
      });
  
      it("Should decrement cart quantity item in 5 after increment in 5", () => {
        const {container} = renderWithProviders(
          <ShoppingCartListContainer />,
          {
           preloadedState: {
            shoppingCart: shoppingCartReducerTestingState
           }
          }
        );
    
        const shoppingCartDataList = shoppingCartReducerTestingState.dataList
        const firstShoppingCartProduct = shoppingCartDataList[0]
    
        const addQuantityButtonList = screen.getAllByRole("button", { name: "+" })
        const firstAddQuantityButton = addQuantityButtonList[0]
    
        const minusQuantityButtonList = screen.getAllByRole("button", { name: "-" })
        const firstMinusQuantityButton = minusQuantityButtonList[0]
        
        fireEvent.click(firstAddQuantityButton)
        fireEvent.click(firstAddQuantityButton)
        fireEvent.click(firstAddQuantityButton)
        fireEvent.click(firstAddQuantityButton)
        fireEvent.click(firstAddQuantityButton)
  
        fireEvent.click(firstMinusQuantityButton)
        fireEvent.click(firstMinusQuantityButton)
        fireEvent.click(firstMinusQuantityButton)
        fireEvent.click(firstMinusQuantityButton)
        fireEvent.click(firstMinusQuantityButton)
        
        const firstShoppingCartQuantity = screen.getByTestId("shoppingCartProductQuantity-" + firstShoppingCartProduct.id)
    
        expect(
          firstShoppingCartQuantity.textContent
        ).toBe(
          `${firstShoppingCartProduct.quantity}`
        )
      });
    
      it("Must not decrement cart quantity when value is 1", () => {
        const {container} = renderWithProviders(
          <ShoppingCartListContainer />,
          {
           preloadedState: {
            shoppingCart: shoppingCartReducerTestingState
           }
          }
        );
    
        const shoppingCartDataList = shoppingCartReducerTestingState.dataList
        const firstShoppingCartProduct = shoppingCartDataList[0]
    
        const minusQuantityButtonList = screen.getAllByRole("button", { name: "-" })
        const firstMinusQuantityButton = minusQuantityButtonList[0]
        
        fireEvent.click(firstMinusQuantityButton)
        
        const firstShoppingCartQuantity = screen.getByTestId("shoppingCartProductQuantity-" + firstShoppingCartProduct.id)
    
        expect(
          firstShoppingCartQuantity.textContent
        ).toBe(
          `1`
        )
      });
    })

    describe("Delete product", () => {
      it("Should delete the product when user clicks on 'Delete product' button", () => {
        const {container} = renderWithProviders(
          <ShoppingCartListContainer />,
          {
           preloadedState: {
            shoppingCart: shoppingCartReducerTestingState
           }
          }
        );
    
        const shoppingCartProductsList = screen.getAllByRole("article")
    
        const deleteProductButtonList = screen.getAllByRole("button", {name: "Delete product"})
        const firstDeleteProductButton = deleteProductButtonList[0]

        fireEvent.click(firstDeleteProductButton)

        expect(
          screen.getAllByRole("article").length
        ).toBe(
          shoppingCartProductsList.length - 1
        )
      });
    })
  })

  describe("Order Details", () => {
    it("Must amounts be rendered in 0 when none product has been selected", () => {
      const {container} = renderWithProviders(
        <ShoppingCartListContainer />,
        {
         preloadedState: {
          shoppingCart: shoppingCartReducerTestingEmptyState
         }
        }
      );

      screen.getByRole("heading", { name: "Order Details" })

      const subTotalTag = screen.getByTestId("purchaseDetails-subtotal")
      const taxAmountTag = screen.getByTestId("purchaseDetails-taxAmount")
      const totalTag = screen.getByTestId("purchaseDetails-total")

      expect(subTotalTag.textContent).toBe("$0.00")
      expect(taxAmountTag.textContent).toBe("$0.00")
      expect(totalTag.textContent).toBe("$0.00")
    })

    it("Must amounts be rendered successfully when a product has been selected", () => {
      renderWithProviders(
        <>
          <ProductsListContainer />
          <ShoppingCartListContainer />
        </>,
        {
         preloadedState: {
          products: productsReducerTestingState
         }
        }
      );
      
      const shoppingCartProductsList = shoppingCartReducerTestingState.dataList
      const firstShoppingCartProduct = shoppingCartProductsList[0]

      const addToCartButtonList = screen.getAllByTestId("AddShoppingCartIcon")
      const firstAddToCartButton = addToCartButtonList[0]

      fireEvent.click(firstAddToCartButton)

      const subTotalTag = screen.getByTestId("purchaseDetails-subtotal")
      const taxAmountTag = screen.getByTestId("purchaseDetails-taxAmount")
      const totalTag = screen.getByTestId("purchaseDetails-total")

      const expectedValues = {
        subTotal: shoppingCartProductUIToShoppingCartProductMapper(firstShoppingCartProduct).totalPrice,
        tax: shoppingCartProductUIToShoppingCartProductMapper(firstShoppingCartProduct).totalPrice * 0.13,
        total: shoppingCartProductUIToShoppingCartProductMapper(firstShoppingCartProduct).totalPrice + (shoppingCartProductUIToShoppingCartProductMapper(firstShoppingCartProduct).totalPrice * 0.13)
      }

      expect(subTotalTag.textContent).toBe(formatMoney(expectedValues.subTotal))
      expect(taxAmountTag.textContent).toBe(formatMoney(expectedValues.tax))
      expect(totalTag.textContent).toBe(formatMoney(expectedValues.total))
    })

    it("Amounts must be rendered successfully when a product has been deleted", () => {
      const {container} = renderWithProviders(
        <>
          <ProductsListContainer />
          <ShoppingCartListContainer />
        </>,
        {
         preloadedState: {
          products: productsReducerTestingState,
          shoppingCart: shoppingCartReducerTestingEmptyState
         }
        }
      );
      
      const addToCartButtonList = screen.getAllByTestId("AddShoppingCartIcon")
      const firstAddToCartButton = addToCartButtonList[0]

      fireEvent.click(firstAddToCartButton)
  
      const deleteProductButtonList = screen.getAllByRole("button", {name: "Delete product"})
      const firstDeleteProductButton = deleteProductButtonList[0]

      fireEvent.click(firstDeleteProductButton)

      const subTotalTag = screen.getByTestId("purchaseDetails-subtotal")
      const taxAmountTag = screen.getByTestId("purchaseDetails-taxAmount")
      const totalTag = screen.getByTestId("purchaseDetails-total")

      expect(subTotalTag.textContent).toBe(formatMoney(0))
      expect(taxAmountTag.textContent).toBe(formatMoney(0))
      expect(totalTag.textContent).toBe(formatMoney(0))
    })

    it("Must amounts be rendered successfully when several products has been deleted", () => {
      const {container} = renderWithProviders(
        <>
          <ProductsListContainer />
          <ShoppingCartListContainer />
        </>,
        {
         preloadedState: {
          products: productsReducerTestingState,
          shoppingCart: shoppingCartReducerTestingEmptyState
         }
        }
      );

      const shoppingCartProductsList = shoppingCartReducerTestingState.dataList

      const addToCartButtonList = screen.getAllByTestId("AddShoppingCartIcon")
      const firstAddToCartButton = addToCartButtonList[0]
      const secondAddToCartButton = addToCartButtonList[1]
      const thirdAddToCartButton = addToCartButtonList[2]

      fireEvent.click(firstAddToCartButton)
      fireEvent.click(secondAddToCartButton)
      fireEvent.click(thirdAddToCartButton)
  
      const deleteProductButtonList = screen.getAllByRole("button", {name: "Delete product"})
      const firstDeleteProductButton = deleteProductButtonList[0]
      const secondDeleteProductButton = deleteProductButtonList[1]

      fireEvent.click(firstDeleteProductButton)
      fireEvent.click(secondDeleteProductButton)

      const [, , thirdProduct] = shoppingCartProductsList

      const subTotalTag = screen.getByTestId("purchaseDetails-subtotal")
      const taxAmountTag = screen.getByTestId("purchaseDetails-taxAmount")
      const totalTag = screen.getByTestId("purchaseDetails-total")

      expect(subTotalTag.textContent).toBe(thirdProduct.totalPrice)
      expect(taxAmountTag.textContent).toBe(
        formatMoney(shoppingCartProductUIToShoppingCartProductMapper(thirdProduct).totalPrice * 0.13)
      )
      expect(totalTag.textContent).toBe(
        formatMoney(
          shoppingCartProductUIToShoppingCartProductMapper(thirdProduct).totalPrice +
        (shoppingCartProductUIToShoppingCartProductMapper(thirdProduct).totalPrice * 0.13) 
        )
      )
    })
  })
});
