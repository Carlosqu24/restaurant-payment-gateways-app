import { Product } from "../../../models/product"
import React from "react";
import ProductCardPresentation from "./ProductCardPresentation";

interface ProductListPresentationProps {
  products: Product[];
}

const ProductListPresentation = ({
  products,
}: ProductListPresentationProps) => {
  return (
    <ul className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
      {products.length > 0 ? (
        products.map((product, index) => <ProductCardPresentation key={index} product={product} />)
      ) : (
        <h2>No hay productos disponibles</h2>
      )}
    </ul>
  );
};

export default ProductListPresentation;
