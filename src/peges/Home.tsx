import image2 from '../images/image2.png'

const Home = () => {
    return <>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5 bg-danger bg-opacity-10 p-5">
            <div className="text-center text-lg-start">
                <h4 className="text-primary fw-bold slide-left">Welcome to Treina</h4>
                <p className="fs-1 fw-bold slide-left">Become More Healthy <br /> and Stay Sporty</p>
                <p className="text-muted slide-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis eveniet reiciendis repellat iusto quidem quisquam dolor laudantium.
                </p>

                <div className="d-flex align-items-center gap-3 mt-4 slide-watch">
                    <button type="button" className="btn btn-primary fs-3 rounded-5">Get Started</button>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-play-circle fs-1 text-primary"></i>
                        <h5 className="mb-0 ms-2">Watch Intro</h5>
                    </div>
                </div>

                <div className="d-flex gap-4 mt-5">
                    <div className="text-center">
                        <h1 className="fw-bold">25<span className="text-primary">+</span></h1>
                        <p className="text-muted">Exercise Types</p>
                    </div>
                    <div className="text-center">
                        <h1 className="fw-bold">91<span className="text-primary">%</span></h1>
                        <p className="text-muted">Satisfaction</p>
                    </div>
                    <div className="text-center">
                        <h1 className="fw-bold">144<span className="text-primary">+</span></h1>
                        <p className="text-muted">Loyal Customers</p>
                    </div>
                </div>
            </div>

            <div className="d-flex align-items-center justify-content-center position-relative" style={{ width: "500px", height: "500px" }}>
                <div
                    className="position-absolute w-100 h-100 rounded-4"
                    style={{
                        backgroundImage: `url(${image2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex: 1,
                    }}
                ></div>

                <img
                    loading="lazy"
                    decoding="async"
                    className=" position-relative"
                    src="https://fse.jegtheme.com/treina/wp-content/uploads/sites/37/2025/01/woman-in-earphones-listening-to-music-after-exerci.webp"
                    height="500" width="500"
                    style={{ zIndex: 2 }}
                />

                <div className="position-absolute bottom-0 start-0 translate-middle bg-white p-3 rounded-4 shadow" style={{ zIndex: 3 }}>
                    <img
                        loading="lazy"
                        decoding="async"
                        className="rounded-circle"
                        src="https://fse.jegtheme.com/treina/wp-content/uploads/sites/37/2025/01/dumbel.webp"
                        height="80" width="80"
                    />
                </div>

                <div className="position-absolute top-5 end-0 translate-middle bg-white p-3 rounded-4 shadow" style={{ zIndex: 3 }}>
                    <img
                        loading="lazy"
                        decoding="async"
                        className="rounded-circle"
                        src="https://fse.jegtheme.com/treina/wp-content/uploads/sites/37/2025/01/roll.webp"
                        height="80" width="80"
                    />
                </div>
            </div>

        </div>
    </>
};

export default Home
