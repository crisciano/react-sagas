import React, { useState } from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';


import ListPets from '../../Pets/components/ListPets';
import { IconButton } from '@material-ui/core';
import ClientsService from '../../../api/services/ClientsService';
import{ compose }from 'recompose'
import useModal from '../../../hooks/useModal'
import FormModal from './FormModal';
// import {withRedux }from '../../../redux/withRedux';

import { array, func, bool  } from 'prop-types';
import withRedux from '../../../redux/withRedux'

// import updateClients from '../../../redux/actions/clientReducer'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import { setModal }from '../../../redux/actions/clientModalReducer'

const ListClients = ({
    clients,
    setModal,
    isAuth
}) => {
    const { isToggle, toggle } = useModal()

    const [ contentForm, setContentForm ] = useState({})

    const deleteItem = id => {
        // console.log(id);
        ClientsService.deleteItem(id)
    }
    const editItem = contentForm => {
        console.log(contentForm);
        setContentForm(contentForm);
        toggle()
        setModal(true)
        // console.log('=========== fetch ==========');
        // withRedux(null, { updateClients })
        
    }


    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="right">Cpf</TableCell>
                            <TableCell align="right">Pets</TableCell>
                            <TableCell align="center"> Ações </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            clients.data && !clients.fetchingClients ? 
                                clients.data.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row"> {row.name} </TableCell>
                                        <TableCell align="right">{row.cpf}</TableCell>
                                        <TableCell align="right">
                                            {
                                                row.pets.length ? <ListPets pets= { row.pets } /> : null
                                            }
                                        </TableCell>
                                        <TableCell align="center" >
                                            <IconButton onClick={() => deleteItem(row.id)} > 
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton onClick={() => editItem(row)}> 
                                                <CreateIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                            : null
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            <FormModal open={isToggle} handleClose={toggle} title="Update Cliente" contentForm={contentForm} />

            
        </>
    )
}

ListClients.prototype = {
    clients : array,
    setModal: func,
    isAth: bool
}

// const mapStateToProps = state => ({
//     isModalOpen: state.isModalOpen
// });

// const mapDispatchToProps = dispatch =>({
//   setModal: bindActionCreators(setModal, dispatch)
// })

export default compose(

    // connect(mapStateToProps, mapDispatchToProps),
    // withRedux(null, {isAuthenticated}),
    withRedux(null, { setModal }),
    withRedux( state => ({
        clients : state.clients,
        isAuth : state.user.isAuthenticated
    })),

) (ListClients)