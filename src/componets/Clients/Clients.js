import React from 'react'
import { compose } from 'recompose'
import { array, func } from 'prop-types'
import whithRedux from '../../redux/withRedux'
import ListClients from './components/ListClients'
// import ListPets from '../Pets/components/ListPets'
// import FormClients from './components/FormClients'

import FormModal from './components/FormModal'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton, Container } from '@material-ui/core'

import useModal from '../../hooks/useModal'

import { setModal } from '../../redux/actions/clientModalReducer'
import withRedux from '../../redux/withRedux'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Clients = ({
    setModal,
    isModalOpen
}) =>  {
// const Clients = props => {

//     const { clients, pets } = useState(props)
    const { isToggle, toggle } = useModal()

    return (
        <Container >
            <h1>
                Clients 
                {/* <IconButton onClick={() =>{ 
                    setModal(true)
                    console.log(isModalOpen);
                }} >  */}
                <IconButton onClick={toggle} > 
                    <AddCircleIcon /> 
                </IconButton>

                {/* <FormModal title="Cadastrar Cliente" /> */}
                <FormModal open={isToggle} handleClose={toggle} title="Cadastrar Cliente" />
            </h1>
            {/* { !clients.fetchingClients ? <ListClients clients={clients.data}  /> : null } */}
            <ListClients />

        </Container>
    )

}

Clients.prototype = {
    clients : array,
    pets : array,
    setModal: func
}

const mapStateToProps = (state) => ({
    isModalOpen: state.modalClient.isModalOpen
});

const mapDispatchToProps = (dispatch) => ({
    setModal: bindActionCreators(setModal, dispatch),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withRedux(null, {setModal}),
    whithRedux( state => ({
        clients : state.clients,
        pets : state.pets,
        isModalOpen: state.modalClient.isModalOpen
    })),
    withRedux(state => console.log(state)) 

)(Clients)