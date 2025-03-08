import image3 from '../images/photo (2).jpg'
import exercise1 from '../images/exercise (3).jpg'
import exercise2 from '../images/exercise (2).jpg'
import exercise3 from '../images/exercise (1).jpg'
import exercise4 from '../images/photo (1).jpg'
const Contact = () => {
    return <>
        <div className="p-5 bg-danger bg-opacity-10 mt-5">
            <div className="flex-lg-row py-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h4 className="text-primary fw-bold">Why We Are Better</h4>
                        <p className="fs-3 fw-semibold">
                            Not Just Giving a Good Life, but an Experience
                        </p>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="card shadow-sm border-1 p-3 d-flex flex-row align-items-center rounded-top-5 shadow-lg">
                                    <i className="bi bi-globe fs-2 text-primary"></i>
                                    <p className="mb-0 ms-3">Global Customer</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card shadow-sm border-0 p-3 d-flex flex-row align-items-center rounded-bottom-5 shadow-lg bg-primary">
                                    <i className="bi bi-book fs-2 text-success"></i>
                                    <p className="mb-0 ms-3">Free Manual Book</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card shadow-sm border-0 p-3 d-flex flex-row align-items-center rounded-top-5 shadow-lg bg-primary ">
                                    <i className="bi bi-alarm fs-2 text-danger"></i>
                                    <p className="mb-0 ms-3">Do It Whenever You Want</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card shadow-sm border-1 p-3 d-flex flex-row align-items-center rounded-top-5 shadow-lg">
                                    <i className="bi bi-chat-square-text fs-2 text-warning"></i>
                                    <p className="mb-0 ms-3">Free Health Consultation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-white border border-opacity-50 p-4 rounded-3 mt-5 shadow-lg">
                <div className="row align-items-stretch" style={{ minHeight: "600px" }}>
                    <div className="col-md-6 position-relative d-flex">
                        <img
                            src={image3}
                            alt="Experience"
                            className="img-fluid w-100 rounded-3 shadow"
                            style={{ objectFit: "cover", filter: "brightness(70%)", minHeight: "500px" }}
                        />

                        <div className="position-absolute top-50 start-50 translate-middle text-white text-center p-4 w-75">
                            <h3 className="fw-bold">Not Just Giving Good Life, but Experienced</h3>
                            <p className="fw-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita commodi provident alias nam atque ad qui cumque neque pariatur.
                            </p>

                            <div className="text-start mt-3">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-check fs-3 text-primary me-2"></i>
                                    <p className="mb-1">Consectetuer adipiscing elit. Aenean commodo</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-check fs-3 text-primary me-2"></i>
                                    <p className="mb-1">Excepteur sint occaecat cupidatat non proident</p>
                                </div>
                                <button className="btn btn-primary px-5 py-2 fw-semibold rounded-5 ">Contac Us</button>
                            </div>

                            <div className="mt-3">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-geo-alt-fill fs-3 text-primary me-2"></i>
                                    <p className="mb-1">Jl. Sunset Road No.815, Kuta, Bali</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-stopwatch fs-3 text-primary me-2"></i>
                                    <p className="mb-1">Mon - Fri : 9:00 am - 5:00 pm</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-person-rolodex fs-3 text-primary me-2"></i>
                                    <p className="mb-1">(+62)81 471 5682</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 p-4 d-flex flex-column" style={{ minHeight: "600px" }}>

                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="fw-semibold">Name</label>
                                <input type="text" className="form-control py-3 fs-5" placeholder="Enter Name" />
                            </div>
                            <div className="col-md-6">
                                <label className="fw-semibold">Email</label>
                                <input type="email" className="form-control py-3 fs-5" placeholder="Enter Email" />
                            </div>

                            <div className="col-md-6">
                                <label className="fw-semibold">Phone</label>
                                <input type="text" className="form-control py-3 fs-5" placeholder="Enter Telephone" />
                            </div>
                            <div className="col-md-6">
                                <label className="fw-semibold">Appointment Date</label>
                                <input type="date" className="form-control py-3 fs-5" />
                            </div>

                            <div className="col-12">
                                <label className="fw-semibold">Select Service</label>
                                <select className="form-select py-3 fs-5">
                                    <option selected>Select Service</option>
                                    <option value="1">Consultation</option>
                                    <option value="2">Health Checkup</option>
                                    <option value="3">Other Services</option>
                                </select>
                            </div>

                            <div className="col-12">
                                <label className="fw-semibold">Message</label>
                                <textarea className="form-control py-3 fs-5" placeholder="Enter Message"></textarea>
                            </div>

                            <div className="col-12 text-center">
                                <button className="btn btn-primary px-5 py-3 fs-5 rounded-5 fw-semibold">Make Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 container">
                <div className="row g-4">
                    <div className="col-12 col-lg-8 d-flex flex-column gap-4">
                        <div className="row g-4">
                            <div className="col-12 col-md-6">
                                <div className="rounded bg-primary text-center text-white p-4 d-flex flex-column justify-content-center h-100">
                                    <h5>Services</h5>
                                    <h1>The Services</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, et.</p>
                                    <p className="fw-semibold">All Services <i className="bi bi-arrow-right"></i></p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="position-relative text-center d-flex flex-column justify-content-center h-100">
                                    <img
                                        src={exercise1}
                                        alt="Online Class"
                                        className="img-fluid rounded-3 shadow w-100"
                                        style={{ objectFit: "cover", filter: "brightness(70%)", minHeight: "250px" }}
                                    />
                                    <div className="position-absolute top-50 start-50 translate-middle text-white w-100 px-3">
                                        <h1 className="fw-bold">Online Class</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        <p className="fw-semibold">Read More <i className="bi bi-arrow-right"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-12 col-md-6">
                                <div className="position-relative text-center d-flex flex-column justify-content-center h-100">
                                    <img
                                        src={exercise2}
                                        alt="Diet Program"
                                        className="img-fluid rounded-3 shadow w-100"
                                        style={{ objectFit: "cover", filter: "brightness(70%)", minHeight: "250px" }}
                                    />
                                    <div className="position-absolute top-50 start-50 translate-middle text-white w-100 px-3">
                                        <h1 className="fw-bold">Diet Program</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        <p className="fw-semibold">Read More <i className="bi bi-arrow-right"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="position-relative text-center d-flex flex-column justify-content-center h-100">
                                    <img
                                        src={exercise3}
                                        alt="Consultation"
                                        className="img-fluid rounded-3 shadow w-100"
                                        style={{ objectFit: "cover", filter: "brightness(70%)", minHeight: "250px" }}
                                    />
                                    <div className="position-absolute top-50 start-50 translate-middle text-white w-100 px-3">
                                        <h1 className="fw-bold">Consultation</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        <p className="fw-semibold">Read More <i className="bi bi-arrow-right"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="position-relative text-center d-flex flex-column justify-content-center h-100">
                            <img
                                src={exercise4}
                                alt="Consultation"
                                className="img-fluid rounded-3 shadow w-100"
                                style={{ objectFit: "cover", minHeight: "250px" }}
                            />
                            <div className="position-absolute top-50 start-50 translate-middle text-white w-100 px-3">
                                <h1 className="fw-bold">Consultation</h1>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="fw-semibold">Read More <i className="bi bi-arrow-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
}

export default Contact