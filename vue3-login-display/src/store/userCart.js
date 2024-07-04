import { defineStore } from 'pinia'

export const userCart = defineStore('cart',{
    state: () => ({
        cart: [],
    }),
    actions: {
        addToCart(eventId){
            this.cart.push(eventId);
        }
    }
})