import React from 'react'
import{ compose }from 'recompose'

import  { Route, Redirect } from 'react-router-dom'
import withRedux from '../../redux/withRedux'
import {obj} from 'prop-types'

const RouteAuth = ({
    user,
    children,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={
                ({location}) =>  
                    user.isAuthenticated ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                            pathname: "/login",
                            state: { from: location }
                            }}
                        />
                    )
            }
        />
    )
}

RouteAuth.prototype = {
    user: obj
}

export default compose(
    withRedux( state => ({ user: state.user}) )
)(RouteAuth)