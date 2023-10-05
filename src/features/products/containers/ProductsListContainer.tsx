"use client";
import React, { useState, useEffect } from "react";
import ProductListPresentation from "../presentations/ProductListPresentation";
import { getAllProducts } from "../../../services/product";
import { Product } from "../../../models/product"

import { products as aProducts } from "../../../db/product";
const ProductsListContainer = () => {
  const [products, setProducts] = useState<Product[]>(aProducts);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };

    fetchData();
  }, []);

  return <ProductListPresentation products={products} />;
};

export default ProductsListContainer;
