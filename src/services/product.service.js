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
            return response.data.productList.filter(p => p.id == id)[0];
        });
    }
    // bulkUpdate (ctx, value) {
    //     return axios.post(`${this.apiVersion}/MemberDataBulk/BulkUpdate`, value, ctx);
    // },
    // multipleBulkUpdate (ctx, value) {
    //     return axios.post(`${this.apiVersion}/MemberDataBulk/MultipleBulkUpdate`, value, ctx);
    // },
    // runDataProcess (ctx, value) {
    //     return axios.post(`${this.apiVersion}/MemberDataBulk/RunDataProcess`, value, ctx);
    // },
};
