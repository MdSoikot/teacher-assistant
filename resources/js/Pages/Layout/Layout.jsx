import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="main">
                <Sidebar />
                {children}
            </div>
            <Footer />
        </div>
    )
}
