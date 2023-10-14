// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListPresentation from "../presentations/ProductListPresentation";

import { fetchAllProducts } from "../../../redux/reducers/productsReducer";
import { addShoppingCartProduct, incrementShoppingCartProductQuantity } from "../../../redux/reducers/shoppingCartReducer";
import { Product, ShoppingCartProduct } from "../../../models/product";

const ProductsListContainer = () => {
  const productsList = useSelector((state: RootState) => state.products.data)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchAllProducts())
  }, []);

  const onAddProductToShoppingCart = (product: Product) => {

    const newCartProduct: ShoppingCartProduct = {
      ...product,
      quantity: 1
    }

    dispatch(addShoppingCartProduct(newCartProduct))
  }

  return <ProductListPresentation 
        products={productsList} 
        onAddProductToShoppingCart={onAddProductToShoppingCart} 
      />;
};

export default ProductsListContainer;
