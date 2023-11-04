import React from 'react'
import ShoppingCartProductCard from '../components/ShoppingCartProductCard';
import { ShoppingCartProduct } from '../../../models/product';
import { PurchaseDetails } from '../../../redux/reducers/shoppingCartReducer';
import OrderDetails from '../components/OrderDetails/OrderDetails';

const shoppingCartListContainerStyles = {
  container: {
      classNames: 'flex flex-col lg:flex-row xl:flex-row',
      cssStyles: {}
  },
  list: {
      classNames: "grid xl:grid-cols-1 md:grid-cols-1 md:w-full sm:grid-cols-1 md:w-full xl:w-full sm:w-full xs:w-full",
      cssStyles: {}
  },
}

interface ShoppingCartListPresentationProps {
    shoppingCartList: ShoppingCartProduct[]
    purchaseDetails: PurchaseDetails
    onIncrementCartProductQuanitity: Function
    onDecrementCartProductQuanitity: Function
}

const ShoppingCartListPresentation = ({ 
    shoppingCartList,
    purchaseDetails,
    onIncrementCartProductQuanitity,
    onDecrementCartProductQuanitity 
}: ShoppingCartListPresentationProps) => {
    return (
        <div 
          className={shoppingCartListContainerStyles.container.classNames}
        >
          <ul 
            className={shoppingCartListContainerStyles.list.classNames}
          >
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


          <OrderDetails
            purchaseDetails={purchaseDetails}
          />
          
        </div>
      );
}

export default ShoppingCartListPresentation