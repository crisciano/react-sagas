import React from 'react'
import{ compose }from 'recompose'
import { Container } from '@material-ui/core'
import ListPets from './components/ListPets'
// import { withRouter } from 'react-router-dom'

const Pets = ({
    state
}) => {
    return (
        <Container >
            <div> <h1> Pets  </h1> </div>
            <ListPets />
        </Container>
    )
}

Pets.prototype = {

}

export default compose()(Pets)
