///db/products.json
import axios from 'axios';

export default {
    getUsers () {
        return axios.get(`/db/users.json`);
    },

};
