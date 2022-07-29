import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes = () => {

    // if (user) {
    //     return <Navigate to='/dashboard' replace={true} />
    // }

    return (
        <>
            <Outlet />
        </>
    )
}

export default PublicRoutes