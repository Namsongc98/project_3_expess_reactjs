// publicRoutes
import Home from "../component/Page/Home/Home"
import Login from "../component/Page/Form/Login"
import Register from "../component/Page/Form/Register"
import ListRom  from "../component/Page/ListRom/ListsRom"
import ProfileRom from"../component/Page/ProfileRom/ProfileRom" //detail rom
import Catecary from "../component/Page/Catecary/Catecary"
import Confirm from "../component/Page/Confirm/Confirm"
import Profile from "../component/Page/Profile/Profile" // detail user


// privateRoutes
import Adminhotel from "../component/Page/Admin/componentAdmin/Adminhotel"
import AdminUser from "../component/Page/Admin/componentAdmin/AdminUser"
import AdminOrder from "../component/Page/Admin/componentAdmin/AdminOrder"




// publicRoutes
const publicRoutes = [
   { path:"/", component: Home},
   { path:"/login", component: Login},
   { path:"/register", component: Register},
   { path:"/listrom", component: ListRom},
   { path:"/profilerom", component: ProfileRom},
   { path:"/catecary", component: Catecary},
   { path:"/confirm", component: Confirm},
   { path:"/profile", component: Profile},
   
];


// privateRoutes
const privateRoutes = [
    { path:"/admin", component: Adminhotel},
    { path:"/adminuser", component: AdminUser},
    { path:"/adminorder", component: AdminOrder}
];


export { publicRoutes, privateRoutes}