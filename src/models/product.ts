export interface Product {
    id: number
    name: string,
    description: string,
    salePrice: number,
    rating: number
    imageUrl: string,
    category: ProductCategories
}

export type ProductCategories = "Meats" | "Pizzas" | "Pastas" | "Burguers" | "Appetitizers"

export enum PRODUCT_CATEGORIES {
    MEATS = "Meats",
    PIZZAS = "Pizzas",
    PASTAS = "Pastas",
    BURGUERS = "Burguers",
    APPETITIZERS = "Appetitizers"
}

export interface ProductUI extends Omit<Product, "salePrice"> {
    salePrice: string
}

export interface ShoppingCartProduct extends Product {
    quantity: number,
    totalPrice: number
}

export interface ShoppingCartProductUI extends Omit<ShoppingCartProduct, "salePrice" | "totalPrice"> {
    salePrice: string,
    totalPrice: string
}