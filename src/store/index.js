import Vue from 'vue'
import Vuex from 'vuex'
import userService from '@/services/user.service.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: {
            items:[],
            total:0
        },
        currentUser: localStorage.currentUser && localStorage.currentUser != '' ? JSON.parse(localStorage.currentUser) : null,
    },
    getters: {
        cart: s => s.cart,
        currentUser: s => s.currentUser,
    },
    actions: {
        addToCart({commit}, {product, quantity}) {
            commit ('addToCart', {product, quantity});
        },
        removeFromCart({commit}, {product, quantity}) {
            commit ('removeFromCart', {product, quantity});
        },
        checkout() {

        },
        login ({ commit }, {username, password}) {
            return userService.getUsers().then((response)=> {
                const user = response.data.userList.find(u=>u.username === username && u.password === password);
                if(user) {
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
            localStorage.currentUser = JSON.stringify(user);
        },
        logout(s) {
            s.currentUser = null;
            localStorage.currentUser = '';
        },
        addToCart(s, {product, quantity}) {
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
                    s.cart.items = s.cart.items.filter(i=>i.product.id !== product.id);
                }
            }
        }
    },

    modules: {
    }
})
