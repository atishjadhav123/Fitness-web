// const Services = () => {
//     return (
//         <div className="mt-5  bg-danger bg-opacity-10 p-5">
//             <div className="text-center p-5">
//                 <h4 className="text-primary">Our Pricing</h4>
//                 <h1>Price for All Services</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
//             </div>

//             {/* Centered Cards with equal spacing */}
//             <div className="d-flex justify-content-center align-items-center gap-4 p-5 ">
//                 {/* Basic Plan */}
//                 <div className="bg-white border border-opacity-50 rounded-3 shadow-lg col-4 position-relative p-4 d-flex flex-column justify-content-between" style={{ minHeight: "500px", width: 350 }}>
//                     <div className="text-center">
//                         <h1>Basic</h1>
//                         <i className="bi bi-star-fill text-primary"></i>
//                         <i className="bi bi-star text-primary"></i>
//                         <i className="bi bi-star text-primary"></i>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                         <hr className="w-100 mx-auto" />
//                         <p><span className="text-primary fw-bold">Free</span> Lunch</p>
//                         <p><span className="text-primary fw-bold">Free</span> Ebook</p>
//                         <p><span className="text-primary fw-bold">2 Times</span> Per-week</p>
//                         <p><span className="text-primary fw-bold">15</span> Online Session</p>
//                         <p><span className="text-primary fw-bold">Free</span> Sharing Session</p>
//                         <div className="d-flex justify-content-center">
//                             <span className="text-dark fs-5">$</span>
//                             <p className="text-primary fw-bold fs-1"> 23.00</p>
//                         </div>
//                     </div>
//                     <button
//                         type="button"
//                         className="p-3 btn btn-primary position-absolute translate-middle-x rounded-5 w-50 shadow-lg"
//                         style={{ bottom: "-25px", left: "50%" }}
//                     >
//                         Get Started
//                     </button>
//                 </div>

//                 {/* Personal Plan (Center - Bigger) */}
//                 <div className="bg-primary text-white border border-opacity-50 rounded-3 shadow-lg col-4 position-relative p-4 d-flex flex-column justify-content-between" style={{ minHeight: "600px", width: 350 }}>
//                     <div className="text-center">
//                         <div className="d-flex justify-content-center align-items-center">
//                             <span> <i className="bi bi-hand-thumbs-up"></i></span>
//                             <button
//                                 type="button"
//                                 className="p-2 bg-white position-absolute end-0 bottom-90 translate-middle-x translate-middle-y rounded-5 w-25 shadow-lg"
//                             >
//                                 Favorite
//                             </button>
//                         </div>
//                         <h1>Personal</h1>
//                         <i className="bi bi-star-fill text-white"></i>
//                         <i className="bi bi-star-fill text-white"></i>
//                         <i className="bi bi-star text-white"></i>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                         <hr className="w-100 mx-auto" />
//                         <p><span className="text-white fw-bold">Free</span> Lunch</p>
//                         <p><span className="text-white fw-bold">Free</span> Ebook</p>
//                         <p><span className="text-white fw-bold">2 Times</span> Per-week</p>
//                         <p><span className="text-white fw-bold">15</span> Online Session</p>
//                         <p><span className="text-white fw-bold">Free</span> Sharing Session</p>
//                         <div className="d-flex justify-content-center">
//                             <span className="text-dark fs-5">$</span>
//                             <p className="text-white fw-bold fs-1"> 53.00</p>
//                         </div>
//                     </div>
//                     <button
//                         type="button"
//                         className="p-3 bg-white text-primary position-absolute translate-middle-x rounded-5 w-50 shadow-lg"
//                         style={{ bottom: "-25px", left: "50%" }}
//                     >
//                         Get Started
//                     </button>
//                 </div>

//                 {/* Premium Plan */}
//                 <div className="bg-white border border-opacity-50 rounded-3 shadow-lg col-4 position-relative p-4 d-flex flex-column justify-content-between" style={{ minHeight: "500px", width: 350 }}>
//                     <div className="text-center">
//                         <h1>Premium</h1>
//                         <i className="bi bi-star-fill text-primary"></i>
//                         <i className="bi bi-star-fill text-primary"></i>
//                         <i className="bi bi-star-fill text-primary"></i>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                         <hr className="w-100 mx-auto" />
//                         <p><span className="text-primary fw-bold">Free</span> Lunch</p>
//                         <p><span className="text-primary fw-bold">Free</span> Ebook</p>
//                         <p><span className="text-primary fw-bold">2 Times</span> Per-week</p>
//                         <p><span className="text-primary fw-bold">15</span> Online Session</p>
//                         <p><span className="text-primary fw-bold">Free</span> Sharing Session</p>
//                         <div className="d-flex justify-content-center">
//                             <span className="text-dark fs-5">$</span>
//                             <p className="text-primary fw-bold fs-1"> 74.00</p>
//                         </div>
//                     </div>
//                     <button
//                         type="button"
//                         className="p-3 btn btn-primary position-absolute translate-middle-x rounded-5 w-50 shadow-lg"
//                         style={{ bottom: "-25px", left: "50%" }}
//                     >
//                         Get Started
//                     </button>
//                 </div>
//             </div>

//             <div className="d-flex text-center justify-content-center">
//                 <p>Get more special offers</p>
//                 <p className="text-primary">Contact Us <i className="bi bi-arrow-right"></i></p>
//             </div>
//         </div>
//     );
// };
// export default Services;

const Services = () => {
    return (
        <div className="mt-5 bg-danger bg-opacity-10 p-5">
            <div className="text-center p-5">
                <h4 className="text-primary">Our Pricing</h4>
                <h1>Price for All Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </div>

            <div className="row g-4 justify-content-center p-5">
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <div className="bg-white border border-opacity-50 rounded-3 shadow-lg position-relative p-4 d-flex flex-column justify-content-between"
                        style={{ minHeight: "500px", width: 350 }}>
                        <div className="text-center">
                            <h1>Basic</h1>
                            <i className="bi bi-star-fill text-primary"></i>
                            <i className="bi bi-star text-primary"></i>
                            <i className="bi bi-star text-primary"></i>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <hr className="w-100 mx-auto" />
                            <p><span className="text-primary fw-bold">Free</span> Lunch</p>
                            <p><span className="text-primary fw-bold">Free</span> Ebook</p>
                            <p><span className="text-primary fw-bold">2 Times</span> Per-week</p>
                            <p><span className="text-primary fw-bold">15</span> Online Session</p>
                            <p><span className="text-primary fw-bold">Free</span> Sharing Session</p>
                            <div className="d-flex justify-content-center">
                                <span className="text-dark fs-5">$</span>
                                <p className="text-primary fw-bold fs-1">23.00</p>
                            </div>
                        </div>
                        <button type="button"
                            className="p-3 btn btn-primary position-absolute translate-middle-x rounded-5 w-50 shadow-lg"
                            style={{ bottom: "-25px", left: "50%" }}>
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <div className="bg-primary text-white border border-opacity-50 rounded-3 shadow-lg position-relative p-4 d-flex flex-column justify-content-between"
                        style={{ minHeight: "600px", width: 350 }}>
                        <div className="text-center">
                            <h1>Personal</h1>
                            <i className="bi bi-star-fill text-white"></i>
                            <i className="bi bi-star-fill text-white"></i>
                            <i className="bi bi-star text-white"></i>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <hr className="w-100 mx-auto" />
                            <p><span className="text-white fw-bold">Free</span> Lunch</p>
                            <p><span className="text-white fw-bold">Free</span> Ebook</p>
                            <p><span className="text-white fw-bold">2 Times</span> Per-week</p>
                            <p><span className="text-white fw-bold">15</span> Online Session</p>
                            <p><span className="text-white fw-bold">Free</span> Sharing Session</p>
                            <div className="d-flex justify-content-center">
                                <span className="text-dark fs-5">$</span>
                                <p className="text-white fw-bold fs-1">53.00</p>
                            </div>
                        </div>
                        <button type="button"
                            className="p-3 bg-white text-primary position-absolute translate-middle-x rounded-5 w-50 shadow-lg"
                            style={{ bottom: "-25px", left: "50%" }}>
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <div className="bg-white border border-opacity-50 rounded-3 shadow-lg position-relative p-4 d-flex flex-column justify-content-between"
                        style={{ minHeight: "500px", width: 350 }}>
                        <div className="text-center">
                            <h1>Premium</h1>
                            <i className="bi bi-star-fill text-primary"></i>
                            <i className="bi bi-star-fill text-primary"></i>
                            <i className="bi bi-star-fill text-primary"></i>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <hr className="w-100 mx-auto" />
                            <p><span className="text-primary fw-bold">Free</span> Lunch</p>
                            <p><span className="text-primary fw-bold">Free</span> Ebook</p>
                            <p><span className="text-primary fw-bold">2 Times</span> Per-week</p>
                            <p><span className="text-primary fw-bold">15</span> Online Session</p>
                            <p><span className="text-primary fw-bold">Free</span> Sharing Session</p>
                            <div className="d-flex justify-content-center">
                                <span className="text-dark fs-5">$</span>
                                <p className="text-primary fw-bold fs-1">74.00</p>
                            </div>
                        </div>
                        <button type="button"
                            className="p-3 btn btn-primary position-absolute translate-middle-x rounded-5 w-50 shadow-lg"
                            style={{ bottom: "-25px", left: "50%" }}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            <div className="d-flex text-center justify-content-center">
                <p>Get more special offers</p>
                <p className="text-primary ms-2">Contact Us <i className="bi bi-arrow-right"></i></p>
            </div>
        </div>
    );
};
export default Services

