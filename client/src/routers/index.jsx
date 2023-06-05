// publicRoutes
import Home from "../component/Page/Home/Home"
import Login from "../component/Page/Form/Login"
import Register from "../component/Page/Form/Register"
import Search  from "../component/Page/Search/Search"
import ProfileRom from"../component/Page/ProfileRom/ProfileRom" //detail rom
import Catecary from "../component/Page/Catecary/Catecary"
import Confirm from "../component/Page/Confirm/Confirm"
import Profile from "../component/Page/Profile/Profile" // detail user


// privateRoutes

import AdminRoom from "../component/Page/Admin/componentAdmin/AdminRoom"
import AdminUser from "../component/Page/Admin/componentAdmin/AdminUser"
import AdminOrder from "../component/Page/Admin/componentAdmin/AdminOrder"




// publicRoutes
const publicRoutes = [
   { path:"/", component: Home},
   { path:"/login", component: Login, layout:null},
   { path:"/register", component: Register},
   { path:"/search", component: Search},
   { path:"/profilerom", component: ProfileRom},
   { path:"/catecary", component: Catecary},
   { path:"/confirm", component: Confirm},
   { path:"/profile", component: Profile},
];


// privateRoutes
const privateRoutes = [
    { path:"/adminrom", component: AdminRoom},
    { path:"/adminuser", component: AdminUser},
    { path:"/adminorder", component: AdminOrder}
];


export { publicRoutes, privateRoutes}