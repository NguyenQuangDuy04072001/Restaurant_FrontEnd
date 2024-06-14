import HomePage from "../pages/Home"
import LoginPage from "../pages/Login"

const publicRoute = [
    { path: '/', component: HomePage},
    { path: '/login', component: LoginPage}
]

const privateRoute = []

export { publicRoute, privateRoute }