import { CartStoretate } from '@/interface/cartStoreState';
import { Product } from '@/interface/product';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './mmkv';

export const useCartStore = create<CartStoretate>()(
    persist(
        (set, get) => ({
        products: [],
        items: 0,
        addProduct: (product: Product) => set((state) => {
            state.items++;
            const hasProduct = state.products.find(p => p.id === product.id);
            // Update Quantity
            if (hasProduct) {
                return {
                    products: state.products.map(p => {
                        if (p.id === product.id) {
                            return {...p, quantity: p.quantity + 1}
                        }
                        return p;
                    })
                }
            } else { // Add it
                return {
                    products: [...state.products, {...product, quantity: 1}]
                }  
            }
        }),
        removeProduct: (product: Product) => set((state) => {
            return {
                products: state.products.map(p => {
                    if (p.id === product.id) {
                        state.items--;
                        return {...p, quantity: p.quantity - 1};
                    }
                    return p;
                }).filter(p => p.quantity > 0)
            }
        }),
        clearCart: () => set((state) => {
            return {
                items: 0,
                products: []
            }
        }),
        }), {name: 'cart-storage', storage: createJSONStorage(() => zustandStorage),}
    )
)