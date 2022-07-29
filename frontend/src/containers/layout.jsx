import { Outlet, Navigate } from 'react-router-dom'
import Header from '@containers/Header'


const Layout = () => {


    // if (!user) {
    //     return <Navigate to='/' replace={true} />
    // }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout