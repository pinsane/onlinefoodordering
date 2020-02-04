import Vue from 'vue'
import Vuex from 'vuex'
// import productService from '@/services/product.service.js'
import userService from '@/services/product.service.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: {
            items:[],
            total:0
        },
        currentUser: null
    },
    getters: {
        products: s => s.products,
        users: s => s.users,
        cart: s => s.cart,
        currentUser: s => s.currentUser,
    },
    actions: {
        addToCart() {

        },
        removeFromCart() {

        },
        checkout() {

        },
        login ({ commit }, {username, password}) {
            return userService.getUsers().then((response)=> {
                const user = response.data.userList.filter(u=>u.username === username && u.password === password);
                if(user && user.length === 1) {
                    commit ('login', user);
                    return true;
                }
                else {
                    return false;
                }
            });
        },
        logout ({ commit }) {
            commit ('logout');
        },
    },
    mutations: {
        login(s, user) {
            s.currentUser = user;
        },
        logout(s) {
            s.currentUser = null;
        },
        addToCart(s, product, quantity) {
            const existItem = s.cart.items.find(i=>i.product.id === product.id);
            if(existItem) {
                existItem.quantity += quantity;
            }else {
                s.cart.items.push({product,quantity});
            }
        },
        removeFromCart(s, product, quantity) {
            const existItem = s.cart.items.find(i=>i.product.id === product.id);
            if(existItem) {
                existItem.quantity -= quantity;
                if(existItem.quantity <= 0) {
                    s.cart.items = s.cart.items.filter(i=>i.product.id === product.id);
                }
            }
        }
    },

    modules: {
    }
})
