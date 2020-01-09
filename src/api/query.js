
export const GET_CLIENTS = "{ clients { id name cpf pets { id name type obs clientId }}}";
export const GET_PETS = "{ pets { id name type obs clientId }}";
export const GET_SERVICES = "{ services{ id name price }}";

export const ADD_CLIENT = 'mutation ($name: String!, $cpf: String!) { addClient(name: $name, cpf: $cpf){ id name cpf }}';

export const UPDATE_CLIENT = 'mutation ($id: ID!, $name: String!, $cpf: String! ) { updateClient(id: $id , name: $name, cpf: $cpf){ id name cpf }}';

export const DELETE_CLIENT = 'mutation ($id: ID!) { deleteClient(id: $id) }'