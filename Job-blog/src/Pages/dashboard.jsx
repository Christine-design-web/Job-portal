import { Outlet } from 'react-router-dom'
import Navbar from '../components/DashboardNavbar'
// import Card from './components/Card'

function Dashboard() {

    return (
        <>

            <Navbar />
            <Outlet />
            {/* <Card/> */}

        </>
    )
}

export default Dashboard