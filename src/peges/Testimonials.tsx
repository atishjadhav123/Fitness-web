import background from '../images/running.jpg'
import homex1 from '../images/homex.jpg'
import homex2 from '../images/homex2.jpg'
import children from '../images/childr.jpg'
import diteimage from '../images/diet.jpg'

const Testimonials: React.FC = () => {
    return <>
        <div className="position-relative w-100 text-center bg-white" style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            padding: '5rem 0',
        }}>
            <h4 className="text-primary">Testimonial</h4>
            <h1 className="text-white">Client Testimonials</h1>
            <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="carousel-container position-absolute  z-1">
                <div className="carousel-track">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="testimonial-card  bg-opacity-25">
                            <p className="testimonial-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum optio et ipsam, beatae tempora sequi necessitatibus quisquam dolorem perspiciatis ut.
                            </p>
                            <div className="testimonial-footer">
                                <i className="bi bi-person fs-1 text-primary"></i>
                                <h4>Atish Jadhav</h4>
                                <i className="bi bi-badge-3d fs-1 text-warning"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-100  text-center py-5 position-relative bg-light" style={{ marginTop: 150 }}>
                <div className="container" style={{ paddingTop: 200 }}>
                    <h4 className="text-primary">Our News</h4>
                    <h1 className="text-dark">News & Articles</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam, dolor nisi numquam optio voluptatum amet aspernatur voluptatibus!</p>

                    <div className="row g-4 mt-3">
                        <div className="col-md-6 d-flex">
                            <div className=" rounded shadow-sm overflow-hidden d-flex w-100">
                                <div className="w-50">
                                    <img src={homex1} alt="Exercise Program" className="w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="p-3 d-flex flex-column justify-content-between w-50">
                                    <h4>This Diet and Exercise Program Can Ease Knee Pain</h4>
                                    <p><i className="bi bi-stopwatch"></i> January 30, 2025</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                    <h5 className="text-primary">Read More <i className="bi bi-arrow-right"></i></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className=" rounded shadow-sm overflow-hidden d-flex w-100">
                                <div className="w-50">
                                    <img src={diteimage} alt="Plant-Based Diet" className="w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="p-3 d-flex flex-column justify-content-between w-50">
                                    <h4>Your Plant-Based Diet Could Really Help the Planet</h4>
                                    <p><i className="bi bi-stopwatch"></i> January 30, 2025</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                    <h5 className="text-primary">Read More <i className="bi bi-arrow-right"></i></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className=" rounded shadow-sm overflow-hidden d-flex w-100">
                                <div className="w-50">
                                    <img src={homex2} alt="Home Workout" className="w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="p-3 d-flex flex-column justify-content-between w-50">
                                    <h4>Best Fat-Burning Workouts You Can Do at Home</h4>
                                    <p><i className="bi bi-stopwatch"></i> January 30, 2025</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                    <h5 className="text-primary">Read More <i className="bi bi-arrow-right"></i></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className=" rounded shadow-sm overflow-hidden d-flex w-100">
                                <div className="w-50">
                                    <img src={children} alt="Children Health" className="w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="p-3 d-flex flex-column justify-content-between w-50">
                                    <h4>Overweight Children Are Developing Heart Complications</h4>
                                    <p><i className="bi bi-stopwatch"></i> January 30, 2025</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                    <h5 className="text-primary">Read More <i className="bi bi-arrow-right"></i></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Testimonials
