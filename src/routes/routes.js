import Home from '../containers/Home/Home';
import Clients from '../componets/Clients/Clients'
import Pets from '../componets/Pets/Pets'
import Login from '../componets/Login/Login';

const routes = [
    {path: "/",         component: Home,    displayName:"Home", exact: true, visible: true },
    {path: "/clients",  component: Clients, displayName:"Clients", visible: true },
    {path: "/pets",     component: Pets,    displayName:"Pets", visible: true },
    {path: "/login",    component: Login,   displayName:"Login" },
    {path: "/services", component: Pets,    displayName:"Services", auth: true, visible: true },
]

export default routes