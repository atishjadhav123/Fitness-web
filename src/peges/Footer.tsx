const Footer = () => {
    return (
        <footer className="bg-danger bg-opacity-10 text-dark mt-5">

            <div className="container py-5">
                <div className="row bg-primary p-4 rounded align-items-center">
                    <div className="col-md-6">
                        <h2>Join Our Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repudiandae in esse!</p>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <i className="bi bi-envelope-paper-heart-fill fs-2 me-2"></i>
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Enter Your Email Address"
                        />
                        <button className="btn btn-light">Subscribe</button>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row py-4">

                    <div className="col-md-3">
                        <h4>Contact Us</h4>
                        <p><i className="bi bi-geo-alt-fill"></i> Jl. Sunset Road No.815, Kuta</p>
                        <p><i className="bi bi-envelope-fill"></i> support@domain.com</p>
                        <p><i className="bi bi-telephone-fill"></i> (+62) 81 6754 345</p>
                    </div>


                    <div className="col-md-3">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Services</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Careers</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Pricing</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Contact</a></li>
                        </ul>
                    </div>


                    <div className="col-md-3">
                        <h4>Useful Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Terms & Conditions</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Disclaimer</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">FAQ</a></li>
                        </ul>
                    </div>



                    <div className="col-md-3">
                        <h4>Work Hours</h4>
                        <p><i className="bi bi-clock-fill"></i> 9 AM  5 PM</p>
                        <p>Monday  Saturday</p>
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod.</p>
                        <button className="btn btn-primary mt-3">Contact Us</button>
                    </div>
                </div>
            </div>

            <div className="bg-danger bg-opacity-10 text-center py-3">
                <p className="mb-0">newweb@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
