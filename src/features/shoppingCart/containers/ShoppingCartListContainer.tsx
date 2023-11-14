
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import ShoppingCartListPresentation from "../presentations/ShoppingCartListPresentation";
import { 
  decrementShoppingCartProductQuantity, 
  incrementShoppingCartProductQuantity,
  deleteShoppingCartProduct 
} from "../../../redux/reducers/shoppingCartReducer";
import { sortShoppingCartProductListAlphabetically } from "../utils";

const ShoppingCartListContainer = () => {
  const {
    dataList: shoppingCartList,
    purchaseDetails
  } = useSelector((state: RootState) => state.shoppingCart)
  const dispatch = useDispatch()

  const onIncrementCartProductQuanitity = (productId: number) => {
    dispatch(incrementShoppingCartProductQuantity(productId))
  }

  const onDecrementCartProductQuanitity = (productId: number) => {
    dispatch(decrementShoppingCartProductQuantity(productId))
  }

  const onDeleteCartProduct = (productId: number) => {
    dispatch(deleteShoppingCartProduct(productId))
  }

  return (
    <ShoppingCartListPresentation 
        shoppingCartList={sortShoppingCartProductListAlphabetically([ ...shoppingCartList ])} 
        purchaseDetails={purchaseDetails}
        onIncrementCartProductQuanitity={onIncrementCartProductQuanitity}
        onDecrementCartProductQuanitity={onDecrementCartProductQuanitity}
        onDeleteCartProduct={onDeleteCartProduct}
    />
  )
};

export default ShoppingCartListContainer;
