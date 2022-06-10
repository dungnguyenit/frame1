
import Collection from '~/pages/Collection';
import Home from '~/pages/Home';
import Journal from '~/pages/Journal';
import LookBook from '~/pages/LookBook';
import Shop from '~/pages/Shop';


const publicRouter = [
    { path:'/', component: Home},
    { path:'/collection', component: Collection},
    { path:'/journal', component: Journal},
    { path:'/lookBook', component:LookBook},
    { path:'/shop', component: Shop},
];

export{publicRouter}