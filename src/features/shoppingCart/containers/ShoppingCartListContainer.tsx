
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import ShoppingCartListPresentation from "../presentations/ShoppingCartListPresentation";
import { decrementShoppingCartProductQuantity, incrementShoppingCartProductQuantity } from "../../../redux/reducers/shoppingCartReducer";

const ShoppingCartListContainer = () => {
  const shoppingCartList = useSelector((state: RootState) => state.shoppingCart.dataList)
  const dispatch = useDispatch()

  console.log({
    shoppingCartList
  })

  const onIncrementCartProductQuanitity = (productId: number) => {
    dispatch(incrementShoppingCartProductQuantity(productId))
  }

  const onDecrementCartProductQuanitity = (productId: number) => {
    dispatch(decrementShoppingCartProductQuantity(productId))
  }

  return (
    <ShoppingCartListPresentation 
        shoppingCartList={shoppingCartList} 
        onIncrementCartProductQuanitity={onIncrementCartProductQuanitity}
        onDecrementCartProductQuanitity={onDecrementCartProductQuanitity}
    />
  )
};

export default ShoppingCartListContainer;
