import { Product } from "../../../models/product"
import React from "react";

interface ProductCardPresentationProps {
  product: Product;
}

const productCardPresentationClassNames = {
  cardContainer:
    "p-6 mt-6 flex flex-col self-start rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0",
  cardImage: "rounded-t-lg",
  cardBody: "mb-6",
  cardTitle: "mb-2 text-xl font-medium leading-tight font-extrabold",
  cardPrice: "font-extrabold",
  cardFooter: "mt-6 flex justify-between",
};

const ProductCardPresentation = ({ product }: ProductCardPresentationProps) => {
  return (
    <div
      // style={{ backgroundColor: "#f1c834", color: "#000" }}
      style={{ backgroundColor: "rgba(235, 235, 235, 0.875)", color: "#000" }}
      // style={{ backgroundColor: "#282828", color: "#fff" }}
      className={productCardPresentationClassNames.cardContainer}
    >
      <div className={productCardPresentationClassNames.cardBody}>
        <h5 className={productCardPresentationClassNames.cardTitle}>
          {product.name}
        </h5>
        <p>{product.description}</p>
      </div>

      <img
        className={productCardPresentationClassNames.cardImage}
        src={product.imageUrl}
        alt="Hollywood Sign on The Hill"
        style={{ height: "200px", objectFit: "contain" }}
      />

      <div className={productCardPresentationClassNames.cardFooter}>
        <p className={productCardPresentationClassNames.cardPrice}>
          ${product.salePrice}
        </p>
        <button>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductCardPresentation;
