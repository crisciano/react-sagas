import Home from './containers/Home/Home';
import Clients from './componets/Clients/Clients'
import Pets from './componets/Pets/Pets'

const routes = [
    {path: "/", component: Home, displayName:"Home", exact: true },
    {path: "/clients", component: Clients,displayName:"Clients" },
    {path: "/pets", component: Pets, displayName:"Pets" },
]

export default routes