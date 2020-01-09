import React from 'react'
import{ compose, lifecycle }from 'recompose'
import withRedux  from '../redux/withRedux'

import Menu from '../componets/Menu/Menu'

import  {
    BrowserRouter as Router, 
    Switch, 
    Route,
    // Link
} from 'react-router-dom'

import routes from './routes'

import { getclients } from '../redux/actions/clientReducer';
import { getPets } from '../redux/actions/petReducer'
import { getServices } from '../redux/actions/ServiceReducer'

import RouteAuth from './components/RouteAuth'

const app = ({
    state 
}) => {
    return (
        <Router >
            <Menu />
            <Switch>
                {/* <Router path="/:page" /> */}
                {   
                    routes.map( (route , key) => ( 
                        route.auth ? 
                            <RouteAuth path={route.path} exact={route.exact} key={key} > { <route.component/> } </RouteAuth>
                            : <Route path={route.path} exact={route.exact} key={key} > { <route.component/> } </Route> 
                    )) 
                } 
            </Switch>
        </Router>
    )
}

app.prototype = {

}

const mapStateToProps = store => ({
    ...store
})
  

export default compose(
    withRedux(mapStateToProps, {
        getclients,
        getPets,
        getServices
    }),
    lifecycle({
        componentWillMount(){
            const {
            getclients,
            getPets,
            getServices
            } = this.props
            getclients()
            getPets()
            getServices()
        }
    }),

)(app)