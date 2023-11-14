import { ShoppingCartProduct } from "../../../models/product";
import { sortArrayAlphabetically } from "../../../utils/array";

export const sortShoppingCartProductListAlphabetically = (array: ShoppingCartProduct[]) =>
    sortArrayAlphabetically({ array, targetKey: "name" })