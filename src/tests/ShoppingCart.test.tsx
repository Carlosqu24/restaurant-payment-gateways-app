

import React from "react";
import { describe, it, expect } from "vitest";
import {fireEvent, screen} from "@testing-library/react"

import { renderWithProviders } from "./utils";

import ShoppingCartListContainer from "../features/shoppingCart/containers/ShoppingCartListContainer";
import { shoppingCartReducerTestingEmptyState, shoppingCartReducerTestingState } from "../redux/reducers/shoppingCartReducer";

describe("ShoppingCart Component", () => {
  it("Shoud list the products successfully", () => {
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

  it("Shoud render no cart items text", () => {
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
    it("Shoud increment cart quantity item in 1", () => {
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
  
    it("Shoud increment cart quantity item in 5", () => {
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
    it("Shoud decrement cart quantity item in 1 after increment in 1", () => {
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
});
