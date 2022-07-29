import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from '@containers/Layout'
import Home from '@pages/Home'
import TransactionPage from '@pages/TransactionPage'
import AboutPage from '@pages/AboutPage'
import ContactPage from '@pages/ContactPage'
import PublicRoutes from '@containers/PublicRoutes'
import WelcomePage from '@pages/WelcomePage'
import LoginPage from '@pages/LoginPage'
import RegisterPage from '@pages/RegisterPage'

const AnimatePage = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<PublicRoutes />} >
                    <Route index element={<WelcomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Route>
                <Route path="/dashboard" element={<ProtectedRoutes />}>
                    <Route index element={<Home />} />
                    <Route path="all-transactions" element={<TransactionPage />} />
                    <Route path='transactions' element={<TransactionPage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='contact' element={<ContactPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AnimatePage