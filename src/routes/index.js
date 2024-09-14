import DetailRestaurant from "~/pages/DetailRestaurant"
import HomePage from "../pages/Home"
import LoginPage from "../pages/Login"
import SearchPage from "../pages/SearchPage"

const publicRoute = [
    { path: '/', component: HomePage, layout: true},
    { path: '/login', component: LoginPage, layout: false},
    { path: '/search', component: SearchPage, layout: true},
    { path: '/restaurant', component: DetailRestaurant, layout: true}
]

const privateRoute = []

export { publicRoute, privateRoute }