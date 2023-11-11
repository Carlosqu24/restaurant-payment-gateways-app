

import React from "react";
import { describe, it, expect } from "vitest";
import {fireEvent, screen} from "@testing-library/react"

import { renderWithProviders } from "./utils";

import ShoppingCartListContainer from "../features/shoppingCart/containers/ShoppingCartListContainer";
import { shoppingCartReducerTestingEmptyState, shoppingCartReducerTestingState } from "../redux/reducers/shoppingCartReducer";
import ProductsListContainer from "../features/products/containers/ProductsListContainer";
import { productsReducerTestingState } from "../redux/reducers/productsReducer";
import { ProductUI } from "../models/product";

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

      const productList: ProductUI[] = productsReducerTestingState.data
      const firstProduct = productList[0]

      const addToCartButtonList = screen.getAllByTestId("AddShoppingCartIcon")
      const firstAddToCartButton = addToCartButtonList[0]

      fireEvent.click(firstAddToCartButton)

      const subTotalTag = screen.getByTestId("purchaseDetails-subtotal")
      const taxAmountTag = screen.getByTestId("purchaseDetails-taxAmount")
      const totalTag = screen.getByTestId("purchaseDetails-total")

      console.log({firstProduct})

      expect(subTotalTag.textContent).toBe("$13.20")
      expect(taxAmountTag.textContent).toBe("$1.72")
      expect(totalTag.textContent).toBe("$14.92")
    })
  })
});
