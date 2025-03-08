import About from "../peges/About"
import Contact from "../peges/Contact"
import Footer from "../peges/Footer"
import Home from "../peges/Home"
import Services from "../peges/Services"
import Testimonials from "../peges/Testimonials"
import download from '../images/skilhub.jpg'

const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid gap-5">
                <img src={download} alt="" style={{ height: 50, width: 100, }} />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fs-5" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active text-primary" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-hover" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-hover" href="#">Services</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-hover"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Pages
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item bg-hover" href="#">Pricing</a></li>
                                <li><a className="dropdown-item bg-hover" href="#">FAQ</a></li>
                                <li><a className="dropdown-item bg-hover" href="#">TEAM</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-hover" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-hover" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-primary rounded-5 p-2">+9373381354</button>
                </div>
            </div>
        </nav>
        <Home />
        <About />
        <Contact />
        <Services />
        <Testimonials />
        <Footer />
    </>
}

export default Navbar
