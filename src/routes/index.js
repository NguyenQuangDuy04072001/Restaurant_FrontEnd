import HomePage from "../pages/Home"
import LoginPage from "../pages/Login"
import SearchPage from "../pages/SearchPage"

const publicRoute = [
    { path: '/', component: HomePage},
    { path: '/login', component: LoginPage},
    { path: '/search', component: SearchPage}
]

const privateRoute = []

export { publicRoute, privateRoute }