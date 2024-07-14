import "../css/main.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

                <Link to="/" className="logo d-flex align-items-center me-auto">
                    <img src="assets/img/logo.png" alt="" />
                    <h1 className="sitename">PowerWatch</h1>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link to={"/"} className="">Home</Link></li>
                        <li><Link to={"/outages"}>View Outages </Link></li>
                        <li><Link to={"/about"}>About Us </Link></li>
                        {/* <li><a href="index.html#features">Features</a></li> */}
                        {/* <li><a href="index.html#services">Services</a></li>
                        <li><a href="index.html#pricing">Pricing</a></li>
                        <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="#">Dropdown 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Dropdown 1</a></li>
                                        <li><a href="#">Deep Dropdown 2</a></li>
                                        <li><a href="#">Deep Dropdown 3</a></li>
                                        <li><a href="#">Deep Dropdown 4</a></li>
                                        <li><a href="#">Deep Dropdown 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Dropdown 2</a></li>
                                <li><a href="#">Dropdown 3</a></li>
                                <li><a href="#">Dropdown 4</a></li>
                            </ul>
                        </li> */}
                        <li><a href="https://preston176.vercel.app/#contact" target="_blank">Contact</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <Link to={"/report"} className="btn-getstarted" href="index.html#about">Get Started</Link>

            </div>
        </header>
    )
}

export default NavBar