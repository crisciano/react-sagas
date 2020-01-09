import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { compose } from 'recompose'
import withRedux from '../../../redux/withRedux'


const ListPets = ({
    pets
}) => {

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell align="right">Tipo</TableCell>
                        <TableCell align="right">Obs</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        pets.data && !pets.fetchingPets ?
                            pets.data.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row"> {row.name} </TableCell>
                                    <TableCell align="right">{row.type}</TableCell>
                                    <TableCell align="right">{row.obs}</TableCell>
                                </TableRow>
                            )) : null
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default compose(
    withRedux( state => ({
        pets : state.pets,
    })),
)(ListPets)