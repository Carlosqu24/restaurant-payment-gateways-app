import { Product } from "../../../models/product"
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface ProductCardPresentationProps {
  product: Product;
  onAddProductToShoppingCart: Function
}

const productCardPresentationClassNames = {
  cardContainer:
  `
    mt-6 
    flex 
    flex-col 
    self-start 
    rounded-lg 
    shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
    sm:shrink-0 
    sm:grow 
    sm:basis-0 
    cursor-pointer 
    bg-transparent 
  `,
  cardImage: "rounded-t-lg",
  cardBody: "py-6 flex justify-between",
  cardTitle: "mb-2 text-xl font-medium leading-tight font-extrabold",
  cardPrice: "font-extrabold",
  cardFooter: "p-6 mt-6 flex justify-between text-[#000]",
};

const ProductCardPresentation = ({ product, onAddProductToShoppingCart }: ProductCardPresentationProps) => {
  return (
    <div
      style={{ 
        
      }}
      className={productCardPresentationClassNames.cardContainer}
    >

      <div style={{ background: "#75757565", display: "flex", alignItems: "center", justifyContent: "center"}} className="p-6">
        <img
          className={productCardPresentationClassNames.cardImage}
          src={product.imageUrl}
          alt="Hollywood Sign on The Hill"
          style={{ height: "200px", objectFit: "contain" }}
        />
      </div>

      <div className={productCardPresentationClassNames.cardBody}>
        <div>
          <h5 className={productCardPresentationClassNames.cardTitle}>
            {product.name}
          </h5>
          <p className={productCardPresentationClassNames.cardPrice}>
            {product.salePrice}
          </p>
        </div>

        <AddShoppingCartIcon 
          className="cursor-pointer"
          onClick={() => onAddProductToShoppingCart(product)} 
        />
      </div>

    </div>
  );
};

export default ProductCardPresentation;
