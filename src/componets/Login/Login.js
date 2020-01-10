import React, { useState } from 'react'
import{ compose }from 'recompose'
import { Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import withRedux from '../../redux/withRedux'
import { obj, func  } from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import ClientService  from '../../api/services/ClientsService'

import { setLogin, setUser } from '../../redux/actions/userReducer'
import { setModal } from '../../redux/actions/clientModalReducer'

import { useHistory, useLocation } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        // width: 200,
      },
    },
}));

const Login = ({
    state,
    user,
    isModalOpen
}) => {
    const classes = useStyles();
    const [ form, setForm ] = useState({})
    const location = useLocation()
    const history = useHistory()

    const login = async (e) =>  {
        e.preventDefault()

        let { from } = location.state  || {from: { pathname: '/' }}

        const clients = await ClientService.getClients()

        const result = clients.find( client => client.name === form.login )

        if( result ) {

            // setLogin(true)
            setModal(true)
            // console.log('===============');
            // console.log('===============');
            // console.log(isModalOpen);
            // console.log('===============');
            // console.log('===============');
            setLogin(true)
            setUser(result)

            console.log(from);
            console.log(form, result);
            console.log(user);
            history.replace(from)
        }

    }

    const handleChange = e => {
        var name = e.target.name
        var value = e.target.value;

        setForm(
            pv => ({
                ...pv,
                [name]: value
            })
        )
    } 

    return (
        <Grid container direction="column" justify="center" alignContent="center">
            <div> <h1> Login  </h1> </div>

            <Grid xs={6} item={true}> 
                <form className={classes.root} noValidate autoComplete="off" onSubmit={login}>
                    <TextField 
                        fullWidth 
                        label="Login" 
                        variant="outlined" 
                        name="login"
                        value={form.login}
                        onChange={handleChange}
                        />
                    <TextField 
                        fullWidth 
                        label="Password" 
                        variant="outlined" 
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        />
                    <Button type="submit" fullWidth variant="contained"  color="primary" > Logar </Button> 
                </form>

            </Grid>

        </Grid>
    )
}

Login.prototype = {
    state: obj,
    user: obj,
    setLogin: func
}

export default compose(
    withRedux(null, {setModal}),
    withRedux(null, {setLogin}),
    withRedux( state => ({
        user: state.user, 
        isModalOpen: state.modalClient.isModalOpen
    })),
    withRedux(state => console.log(state))
) (Login)