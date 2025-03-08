
import { motion } from "framer-motion"

const About = () => {
    return <>
        <div className=" p-5  mt-5">
            <div className="row align-items-center g-4">
                <div className="col-12 col-lg-5 text-center text-lg-start">
                    <h4 className="text-primary slide-left">We Are Treina</h4>
                    <motion.h2
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="animate-left">Adjust Your Body, Get A Perfect Balance</motion.h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="col-12 col-lg-6 text-center">
                    <img
                        loading="lazy"
                        decoding="async"
                        className="img-fluid rounded-4"
                        src="https://fse.jegtheme.com/treina/wp-content/uploads/sites/37/2025/01/young-woman-personal-trainer-helping-with-workout-at-gym.webp"
                        style={{
                            minHeight: "100px",
                            maxHeight: "200px",
                            objectFit: "cover"
                        }}
                    />
                </div>
            </div>




            <div className="row align-items-center justify-content-between mt-3">
                <div className="col-12 col-md-3 text-center text-md-start mb-4 mb-md-0">
                    <p><i className="bi bi-check fs-3 text-success me-2"></i> Learn from customer feedback</p>
                    <p><i className="bi bi-check fs-3 text-success me-2"></i> Best User Satisfaction</p>
                    <p><i className="bi bi-check fs-3 text-success me-2"></i> Best Diet Tips & Info</p>
                    <p><i className="bi bi-check fs-3 text-success me-2"></i> Professional Team</p>
                    <p><i className="bi bi-check fs-3 text-success me-2"></i> 24/7 customer support</p>
                </div>

                <div className="col-12 col-md-3 text-center bg-danger-subtle p-3 mb-4 mb-md-0">
                    <i className="bi bi-person-bounding-box fs-1 text-primary"></i>
                    <p className="mt-2">You Run Your Business, We Will Handle Your Bookkeeping</p>
                </div>

                <div className="col-12 col-md-5 text-center position-relative">
                    <div className="position-absolute start-50 start-50 translate-middle-x translate-middle-y bg-white  rounded-3 shadow-lg text-dark z-index-1 w-25" style={{ marginLeft: 50, height: 190 }}>
                        <img decoding="async" src="https://fse.jegtheme.com/treina/wp-content/uploads/sites/37/2025/01/smartwacth.webp"
                            className="img-fluid mb-2" style={{ maxWidth: "50px" }} />
                        <h2 className="fs-6 text-primary">Track Everything</h2>
                    </div>

                    <img
                        loading="lazy"
                        decoding="async"
                        className="img-fluid rounded-4"
                        src="https://fse.jegtheme.com/treina/wp-content/uploads/sites/37/2025/01/young-woman-personal-trainer-helping-with-workout.webp"
                        style={{ width: "100%", maxHeight: "350px", objectFit: "cover" }}
                    />
                </div>
            </div>


            <div className="text-start mt-4">
                <button type="button" className="btn btn-primary">Learn About Us</button>
            </div>

            <div className="row mt-5">
                <div className="col-lg-6 position-relative text-center">
                    <img
                        loading="lazy"
                        decoding="async"
                        className="gutenverse-image-box-filled img-fluid rounded-4"
                        src="https://fse.jegtheme.com/treina/wp-content/uploads/sites/37/2025/01/beautiful-woman-doing-fitness-workout-at-home.webp"
                        height="600"
                        width="500"
                    />
                    <div className="position-absolute bottom-0 start-50 translate-middle-x text-center bg-white text-dark p-3 rounded-3 w-75 mb-3">
                        <p className="mb-1 fst-italic">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, nisi!"</p>
                        <h4 className="text-warning">Izaac Mcbride</h4>
                    </div>
                </div>

                <div className="col-lg-6">
                    <h4 className="text-primary">The Sport Solution</h4>
                    <h3 className="fs-1">Guarantee Feel Free From Pain Again</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud.
                    </p>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="card-container d-flex align-items-center bg-white border border-opacity-50 p-3 rounded-3 gap-4 mt-3 shadow-lg"
                    >
                        <div
                            className="d-flex align-items-center justify-content-center bg-primary text-white p-3 rounded-circle"
                            style={{ width: "60px", height: "60px" }}
                        >
                            <i className="bi bi-coin fs-3"></i>
                        </div>
                        <div>
                            <h2>Affordable Price</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, magni? Tenetur, dolores!</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="d-flex align-items-center  p-3  gap-4 mt-3 ">
                        <div className="d-flex align-items-center justify-content-center bg-primary text-white p-3 rounded-circle" style={{ width: "60px", height: "60px" }}>
                            <i className="bi bi-phone fs-3"></i>
                        </div>
                        <div>
                            <h2>Do it Online</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, magni? Tenetur, dolores!</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="d-flex align-items-center  p-3 rounded-3 gap-4 mt-3 ">
                        <div className="d-flex align-items-center justify-content-center bg-primary text-white p-3 rounded-circle" style={{ width: "60px", height: "60px" }}>
                            <i className="bi bi-alarm fs-3"></i>
                        </div>
                        <div>
                            <h2>24/7 Support</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, magni? Tenetur, dolores!</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    </>
};

export default About
