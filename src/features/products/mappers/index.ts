import { Product, ProductUI, ShoppingCartProduct, ShoppingCartProductUI } from "../../../models/product";
import { formatMoney, reverseFormatMoney } from "../../../utils/money";

export const productToShoppingCartProductMapper = (product: Product): ShoppingCartProduct => ({
    ...product,
    quantity: 1,
    totalPrice: 1 * product.salePrice
})

export const productToProductUIMapper = (product: Product): ProductUI => ({
    ...product,
    salePrice: formatMoney(product.salePrice),
})

export const productUIToProductMapper = (productUi: ProductUI): Product => ({
    ...productUi,
    salePrice: reverseFormatMoney(productUi.salePrice)
})

export const shoppingCartProductToShoppingCartProductUIMapper = (product: ShoppingCartProduct): ShoppingCartProductUI => ({
    ...product,
    salePrice: formatMoney(product.salePrice),
    totalPrice: formatMoney(product.totalPrice)
})

export const shoppingCartProductUIToShoppingCartProductMapper = (productUi: ShoppingCartProductUI): ShoppingCartProduct => ({
    ...productUi,
    salePrice: reverseFormatMoney(productUi.salePrice),
    totalPrice: reverseFormatMoney(productUi.totalPrice),
})