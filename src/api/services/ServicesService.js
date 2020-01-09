
import axios from 'axios'
import { GET_SERVICES } from '../query'
import { api } from '../constants'

const getServices = async () => { 
    const { services } = (await axios( api, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({ query: GET_SERVICES })
    })).data.data
    return services;
}
// .then(res => res.data)
// .then(res => res.data.clients)

export default {
    getServices
}