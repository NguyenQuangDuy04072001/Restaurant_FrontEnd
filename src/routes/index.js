import DetailRestaurant from "~/pages/DetailRestaurant"
import HomePage from "../pages/Home"
import LoginPage from "../pages/Login"
import SearchPage from "../pages/SearchPage"

const publicRoute = [
    { path: '/', component: HomePage},
    { path: '/login', component: LoginPage},
    { path: '/search', component: SearchPage},
    { path: '/restaurant', component: DetailRestaurant}
]

const privateRoute = []

export { publicRoute, privateRoute }