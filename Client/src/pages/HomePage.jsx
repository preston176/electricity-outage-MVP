import { Link } from "react-router-dom"
import "../css/main.css"

const HomePage = () => {
    return (
        <>

            <div className="">

                <section id="hero" className="hero section">
                    <div className="hero-bg">
                        <img src="/img/hero-bg-light.webp" alt="" />
                    </div>
                    <div className="container text-center">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h1 data-aos="fade-up" className="">Welcome to <span>PowerWatch</span></h1>
                            <p data-aos="fade-up" data-aos-delay="100" className="">Click on {"Get Started"} to begin<br /></p>
                            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                                <Link to="/report" className="btn-get-started">Get Started</Link>
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                            <img src="/img/hero-services-img.webp" className="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300" />
                        </div>
                    </div>

                </section>


                <section id="featured-services" className="featured-services section">
                    <div className="container">
                        <div className="row gy-4">

                            <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="service-item d-flex">
                                    <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
                                    <div>
                                        <h4 className="title"><Link to="/report" className="stretched-link">Report an Outage</Link></h4>
                                        <p className="description">Easily report power outages in your area and help us quickly address the issue.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="service-item d-flex">
                                    <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
                                    <div>
                                        <h4 className="title"><Link to="/outages" className="stretched-link">Track Outages</Link></h4>
                                        <p className="description">Stay updated with real-time information about ongoing outages and their status.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-item d-flex">
                                    <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
                                    <div>
                                        <h4 className="title"><Link to="/outages" className="stretched-link">Analyze Trends</Link></h4>
                                        <p className="description">Access detailed reports and analytics on outage patterns and response times.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default HomePage