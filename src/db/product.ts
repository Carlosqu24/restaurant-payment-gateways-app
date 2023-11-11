import { Product } from "../models/product";

export const products: Product[] = [{
    id: 1,
    name: "Costillas de cerdo BBQ",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ipsum corrupti deserunt consectetur dolore.",
    salePrice: 13.2,
    rating: 4.2,
    imageUrl: "products/transparent-bbq-ribs.png",
    category: "Meats"
}, {
    id: 2,
    name: "Pizza Jamón y Queso",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ipsum corrupti deserunt consectetur dolore.",
    salePrice: 19.5,
    rating: 4.2,
    imageUrl: "products/transparent-cheese-jam-pizza.png",
    category: "Pizzas"
}, {
    id: 3,
    name: "Spaghetti Carbonara",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ipsum corrupti deserunt consectetur dolore.",
    salePrice: 11.8,
    rating: 4.2,
    imageUrl: "products/transparent-carbonara-noodles.png",
    category: "Pastas"
}, {
    id: 4,
    name: "Hamburguesa de queso",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ipsum corrupti deserunt consectetur dolore.",
    salePrice: 6.85,
    rating: 4.2,
    imageUrl: "products/transparent-cheeseburger.png",
    category: "Burguers"
}, {
    id: 5,
    name: "Papas fritas",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ipsum corrupti deserunt consectetur dolore.",
    salePrice: 1.5,
    rating: 4.2,
    imageUrl: "products/transparent-french-fries.png",
    category: "Appetitizers"
}]

export const shoppingCartProducts = [
    {
        "id": 3,
        "name": "Spaghetti Carbonara",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ipsum corrupti deserunt consectetur dolore.",
        "salePrice": "$11.80",
        "rating": 4.2,
        "imageUrl": "products/transparent-carbonara-noodles.png",
        "category": "Pastas",
        "quantity": 1,
        "totalPrice": "$11.80"
    },
    {
        "id": 2,
        "name": "Pizza Jamón y Queso",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ipsum corrupti deserunt consectetur dolore.",
        "salePrice": "$19.50",
        "rating": 4.2,
        "imageUrl": "products/transparent-cheese-jam-pizza.png",
        "category": "Pizzas",
        "quantity": 1,
        "totalPrice": "$19.50"
    }
]