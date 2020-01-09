import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import ClientsService from '../../../api/services/ClientsService';
import { func, obj } from 'prop-types'
import { compose } from 'recompose';
import withRedux from '../../../redux/withRedux';
import updateClient from '../../../redux/actions/clientReducer'

// import { validateForm } from '../../../helpers/validation'

import useValidate from '../../../helpers/validation'

const validationForm = {
    name: {
        presence: true,
        length: {
            minimum: 3,
            message: 'com pelo menus 3 caracteres'
        }
    },
    cpf: {
        presence: true,
        length: {
            minimum: 11,
            message: 'com pelo menus 11 caracteres'
        }
    }
};

const FormClients = ({
    closeModal,
    contentForm,
    updateClient
}) => {

    const { validateForm } = useValidate();

    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        // console.log(form);
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    
    const submit = (e) => {
        e.preventDefault()

        // if(validateEmail("cris@gmail.com"))

        console.log(validateForm(form, validationForm));

        if(validateForm(form, validationForm) === undefined){
            form.id === undefined ?
                ClientsService.setClients(form) :
                ClientsService.updateClient(form)

            closeModal()
        }
            
        // updateClient()

    }
    
    const [form, setForm] = useState({ ...contentForm})
    

    return (
        <div> 
            <form noValidate autoComplete="off" onSubmit={submit}>
                <TextField 
                    fullWidth
                    margin="normal"
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                    label="Name" />
                <TextField 
                    fullWidth
                    margin="normal"
                    value={form.cpf}
                    name="cpf"
                    onChange={handleChange}
                    label="Cpf" />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"> Salvar</Button>
            </form> 
        </div>
    )
}

FormClients.prototype = {
    closeModal : func,
    contentForm : obj  
}

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch =>({
//     updateClient: bindActionCreators( updateClient , dispatch)
// })

export default compose(
    // connect(mapStateToProps, mapDispatchToProps),
    withRedux(null, { updateClient })
)(FormClients)