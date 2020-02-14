///db/products.json
import axios from 'axios';

export default {
    getProducts(ps, pi) {
        return axios.get(`/db/products.json`).then(response => {
            return {

                items: response.data.productList.slice(pi * ps, (pi * ps) + ps),
                total: response.data.productList.length
            }
        });
    },
    getProduct(id) {
        return axios.get(`/db/products.json`).then(response => {
            return response.data.productList.find(p => p.id == id);
        });
    }
 
};
