// publicRoutes
import Home from "../component/Page/Home/Home"
import Login from "../component/Page/Form/Login"
import Register from "../component/Page/Form/Register"
import Search  from "../component/Page/Search/Search"
import ProfileRom from"../component/Page/ProfileRom/ProfileRom" //detail rom

// privateRoutes
import Admin from "../component/Page/Admin/Admin"
import Confirm from "../component/Page/Confirm/Confirm"
import Profile from "../component/Page/Profile/Profile" // detail user


// publicRoutes
const publicRoutes = [
   { path:"/", component: Home},
   { path:"/login", component: Login},
   { path:"/register", component: Register},
   { path:"/search", component: Search},
   { path:"/profileRom", component: ProfileRom}
];


// privateRoutes
const privateRoutes = [
    { path:"/admin", component: Admin},
    { path:"/confirm", component: Confirm},
    { path:"/profile", component: Profile}
];


export { publicRoutes, privateRoutes}