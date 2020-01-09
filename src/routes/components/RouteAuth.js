import React from 'react'
import{ compose }from 'recompose'

import  { Route, Redirect } from 'react-router-dom'

const  auth = {
    isAuthenticated: false
}

const RouteAuth = ({
    children,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={
                ({location}) =>  
                    auth.isAuthenticated ? (
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

}

export default compose()(RouteAuth)