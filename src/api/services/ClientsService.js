
import axios from 'axios'
import { GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT } from '../query'
import { api } from '../constants'

const getClients = async () => { 
    const { clients } = (await axios( api, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({ query: GET_CLIENTS })
    })).data.data
    return clients;
}

const setClients = async (variables) => (
    await axios(api, {
        method: "post",
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        data: {
            query: ADD_CLIENT,
            variables
        }
    })
    .then(res => res.data)
    .then(res => res.data.addClient)
    // .catch(err => console.log(err))
)

const updateClient = variables => {
    console.log(variables);
    axios(api, {
        method: "post",
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        data: {
            query: UPDATE_CLIENT,
            variables
        }
    })
    .then(res => res.data)
    .then(res => res.data.addClient)
}

const deleteItem = id => {

    console.log(id);

    axios(api,{
        method: 'post',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        data: {
            query: DELETE_CLIENT,
            variables: { id }
        }

    })
    .then(res => res.data)
    .then(res => res.data.deleteClient)
    .catch(err => console.log(err))

}

export default {
    getClients,
    setClients,
    deleteItem,
    updateClient
}