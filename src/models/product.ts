export interface Product {
    id: number
    name: string,
    description: string,
    salePrice: number,
    rating: number
    imageUrl: string
}

export interface ShoppingCartProduct extends Product {
    quantity: number
}