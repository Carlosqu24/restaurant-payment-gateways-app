import React from 'react'
import ShoppingCartProductCard from '../components/ShoppingCartProductCard';
import { ShoppingCartProduct } from '../../../models/product';

interface ShoppingCartListPresentationProps {
    shoppingCartList: ShoppingCartProduct[]
    onIncrementCartProductQuanitity: Function
    onDecrementCartProductQuanitity: Function
}

const ShoppingCartListPresentation = ({ 
    shoppingCartList,
    onIncrementCartProductQuanitity,
    onDecrementCartProductQuanitity 
}: ShoppingCartListPresentationProps) => {
    return (
        <ul className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
          {shoppingCartList.length > 0 ? (
            shoppingCartList.map((product, index) => 
                <ShoppingCartProductCard 
                    key={index} 
                    shoppingCartProduct={product}
                    onIncrementCartProductQuanitity={onIncrementCartProductQuanitity}
                    onDecrementCartProductQuanitity={onDecrementCartProductQuanitity}
                />)
          ) : (
            <h2>No hay productos añadidos al carrito</h2>
          )}
        </ul>
      );
}

export default ShoppingCartListPresentation