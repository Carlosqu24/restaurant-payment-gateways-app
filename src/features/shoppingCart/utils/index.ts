import { ShoppingCartProduct } from "../../../models/product";

export const sortShoppingCartProductListAlphabetically = (array: ShoppingCartProduct[]) => {
    return array.sort(
        (a: ShoppingCartProduct, b: ShoppingCartProduct) => {

            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        })
}