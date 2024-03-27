import { Product } from './product'

export interface CartStoretate {
    products: Array<Product & {quantity: number}>;
    items: number;
    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;
    clearCart: () => void;
}