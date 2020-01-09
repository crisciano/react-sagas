
import axios from 'axios'
import { GET_PETS } from '../query'
import { api } from '../constants'

const getPets = async () => { 
    const { pets } = (await axios( api, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({ query: GET_PETS })
    })).data.data
    return pets;
}
// .then(res => res.data)
// .then(res => res.data.clients)

export default {
    getPets
}