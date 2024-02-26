import { ref } from 'vue';

export const store = {
    cart: ref([]),
    addTetris(name, price, imagesrc, amount) {
        const existingItem = store.cart.value.find(item => item.name === name);
        if (existingItem) {
            existingItem.amount = amount;
        } else {
            store.cart.value = [...store.cart.value, { name, price, imagesrc, amount }];
        }
    },
    getCart() {
        return store.cart.value;
    }
};