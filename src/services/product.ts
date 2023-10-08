import { products } from "../db/product";
import { Product } from "../models/product";

export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(products), 0))
}
