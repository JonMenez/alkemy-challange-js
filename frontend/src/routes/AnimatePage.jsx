import { Routes, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import TransactionPage from '@pages/TransactionPage'

const AnimatePage = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="all-transactions" element={<TransactionPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AnimatePage