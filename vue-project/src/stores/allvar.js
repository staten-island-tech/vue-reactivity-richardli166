import { reactive } from 'vue'

export const store = reactive({
    cart: [],
    addTetris(name, price, imagesrc, amount) {
        for (let i = 0; i < this.cart.length; ++i) {
             if (this.cart[i].name == name) {
                 this.cart[i].amount = amount;
                 return;
             }
        }

        this.cart.push({
            "name": name,
            "price": price,
            "imagesrc": imagesrc,
            "amount": amount,
        })
    },
    getCart() {
        return this.cart;
    }
});
