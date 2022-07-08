import { Routes, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import TransactionPage from '@pages/TransactionPage'
import AboutPage from '@pages/AboutPage'
import ContactPage from '@pages/ContactPage'

const AnimatePage = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
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