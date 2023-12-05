import { Routes, Route } from "react-router-dom";
import Admin from "../view/admin";
import ShoppingCart from "../view/shoppingCart";
const Router = () => {
    const routerArr = [
        {
            path: '/admin',
            name: 'Admin',
            component: Admin
        },
        {
            path: '/shoppingCart',
            name: 'ShoppingCart',
            component: ShoppingCart
        },
    ]
    return (
        <Routes>
            {
                routerArr.map((item, index) => {
                    return (
                        <Route path={item.path} element={<item.component />} key={index} />
                    )
                })
            }
            <Route path="*" element={<Admin/>}/>
        </Routes>
    )
}
export default Router;