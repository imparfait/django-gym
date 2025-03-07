import "./Home.css";
import heroImg from "../assets/gym-02.png";
import dumbleIcon from "../assets/dumble.png";
import Pricing from "./Pricing";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            
            <section className="hero">
                <div className="container">
                    <div className="hero__wrapper">

                        {/* hero content */}
                        <div className="hero__content">
                            <h2 className="section__title"> Exercise is the key to a <span className="highlights">Healthy</span> Lifestyle </h2>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Consequatur dignissimos, ea voluptatem excepturi voluptatum itaque! </p>
                            <button className="join__btn">Get Started</button>

                        </div>

                        {/* hero image */}
                        <div className="hero__img">
                            <div className="hero__img-wrapper">
                                <div className="box-01">
                                    <div className="box-02">
                                        <div className="box-03">
                                            <div className="box-img">
                                                <img src={heroImg} alt="hero" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="heart__rate">
                                    <h5>Heart Rate</h5>
                                    <span><i class="ri-heart-pulse-fill"></i></span>
                                    <h5>2567 BPM</h5>
                                </div>

                                <div className="gym__location">
                                    <span><i class="ri-map-pin-fill"></i></span>
                                    <h5>Find a new gym <br /> near you</h5>
                                </div>

                                <div className="dumble-icon"> <img src={dumbleIcon} alt="hero" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Pricing />
            <Footer />

            
        </>      
    );
  }
  
  export default Home;