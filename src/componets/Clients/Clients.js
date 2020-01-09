import React from 'react'
import { compose } from 'recompose'
import { array } from 'prop-types'
import whithRedux from '../../redux/withRedux'
import ListClients from './components/ListClients'
// import ListPets from '../Pets/components/ListPets'
// import FormClients from './components/FormClients'

import FormModal from './components/FormModal'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton, Container } from '@material-ui/core'

import useModal from '../../hooks/useModal'

const Clients = ({
    clients,
    pets
}) =>  {
// const Clients = props => {

//     const { clients, pets } = useState(props)
    const { isToggle, toggle } = useModal()

    return (
        <Container >
            <h1>
                Clients 
                <IconButton onClick={toggle} > 
                    <AddCircleIcon /> 
                </IconButton>

                <FormModal open={isToggle} handleClose={toggle} title="Cadastrar Cliente" />
            </h1>
            {/* { !clients.fetchingClients ? <ListClients clients={clients.data}  /> : null } */}
            <ListClients />
            
            {/* <hr></hr>

            <h1>Pets</h1>
            { !pets.fetchingPets ? <ListPets pets={pets.data} /> : null } */}

        </Container>
    )

}

Clients.prototype = {
    clients : array,
    pets : array
}

export default compose(
    whithRedux( state => ({
        clients : state.clients,
        pets : state.pets
    }))

)(Clients)