import { Product, ProductUI } from "../../../models/product";
import { formatMoney } from "../../../utils/money";

export const productToProductUIMapper = (product: Product): ProductUI => ({
    ...product,
    salePrice: formatMoney(product.salePrice),
})