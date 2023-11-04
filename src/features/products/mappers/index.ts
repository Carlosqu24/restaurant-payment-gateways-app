import { Product, ProductUI } from "../../../models/product";
import { formatMoney, reverseFormatMoney } from "../../../utils/money";

export const productToProductUIMapper = (product: Product): ProductUI => ({
    ...product,
    salePrice: formatMoney(product.salePrice),
})

export const productUIToProductMapper = (productUi: ProductUI): Product => ({
    ...productUi,
    salePrice: reverseFormatMoney(productUi.salePrice)
})