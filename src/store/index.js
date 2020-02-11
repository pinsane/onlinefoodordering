import Vue from 'vue'
import Vuex from 'vuex'
import userService from '@/services/user.service.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: {
            items:[],
            total:0,
            totalDiscount:0
        },
        currentUser: localStorage.currentUser && localStorage.currentUser != '' ? JSON.parse(localStorage.currentUser) : null,
    },
    getters: {
        cart: s => s.cart,
        currentUser: s => s.currentUser,
    },
    actions: {
        addToCart({commit}, {product, quantity}) {
            // send item to server
            commit ('addToCart', {product, quantity});
        },
        removeFromCart({commit}, {product, quantity}) {
            // call server to remove item
            commit ('removeFromCart', {product, quantity});
        },
        checkout({commit}) {
            // send checkout to server
            commit ('checkout');
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
        checkout (s) {
            s.cart= {
                items:[],
                total:0,
                totalDiscount:0
            };
        },
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

            s.cart.total = s.cart.items.reduce((a, b) => a + (b.quantity * b.product.salePrice), 0);

            s.cart.totalDiscount = s.cart.items.reduce((a, b) => {
                let price = b.product.price;
                if (!price) {
                  price = 0;
                }
                const discount = price -  b.product.salePrice;
                return a + (b.quantity * discount);
              }, 0);
        },
        removeFromCart(s, {product, quantity}) {
            const existItem = s.cart.items.find(i=>i.product.id === product.id);
            if(existItem) {
                existItem.quantity -= quantity;
                if(existItem.quantity <= 0) {
                    s.cart.items = s.cart.items.filter(i=>i.product.id !== product.id);
                }
            }

            s.cart.total = s.cart.items.reduce((a, b) => a + (b.quantity * b.product.salePrice), 0);

            s.cart.totalDiscount = s.cart.items.reduce((a, b) => {
                let price = b.product.price;
                if (!price) {
                  price = 0;
                }
                const discount = price -  b.product.salePrice;
                return a + (b.quantity * discount);
              }, 0);
        }
    },

    modules: {
    }


})
