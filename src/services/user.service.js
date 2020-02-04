///db/products.json
import axios from 'axios';

export default {
    getUsers () {
        return axios.get(`/db/users.json`);
    },
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
