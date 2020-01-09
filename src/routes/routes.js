import Home from '../containers/Home/Home';
import Clients from '../componets/Clients/Clients'
import Pets from '../componets/Pets/Pets'
console.log(Home);

const routes = [
    {path: "/", component: Home, displayName:"Home", exact: true },
    {path: "/clients", component: Clients, displayName:"Clients" },
    {path: "/pets", component: Pets, displayName:"Pets" },
    {path: "/services", component: Pets, displayName:"Services", auth: true },
]

export default routes