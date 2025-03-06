import "./Pricing.css";

function Pricing() {
    return(
        <section id="pricing-plan">
            <div className="container">
                <div className="pricing__top">
                    <h2 className="section__title">Gym <span className="highlights"> Pricing </span> Plan</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Provident, unde id architecto 
                    doloremque nesciunt adipisci.</p>
                </div>

                {/* Pricing Wrapper */}
                <div className="pricing__wrapper">
                    <div className="pricing__item">
                        <div className="pricing__card-top">
                            <h2 className="section__title">Regular Member</h2>
                            <h2 className="pricing">$50<span>/month</span></h2>
                        </div>

                        <div className="services">
                            <ul>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Unlimited access to the gym 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Customer support 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Personal trainer 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Standard options 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    5 classes per week 
                                </li>
                                <li>
                                    <span><i class="ri-subtract-line"></i></span> 
                                    Invite a friend every week
                                </li>
                                <li>
                                    <span><i class="ri-subtract-line"></i></span> 
                                    Freeze membership (no extra cost)
                                </li>
                            </ul>

                            <button className="register__btn">Join Now</button>

                        </div>
                    </div>

                    <div className="pricing__item">
                        <div className="pricing__card-top">
                            <h2 className="section__title">Standard Member</h2>
                            <h2 className="pricing">$70<span>/month</span></h2>
                        </div>

                        <div className="services">
                            <ul>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Unlimited access to the gym 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Customer support 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Personal trainer 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Standard options 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    5 classes per week 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Invite a friend every week
                                </li>
                                <li>
                                    <span><i class="ri-subtract-line"></i></span> 
                                    Freeze membership (no extra cost)
                                </li>
                            </ul>

                            <button className="register__btn">Join Now</button>

                        </div>
                    </div>

                    <div className="pricing__item">
                        <div className="pricing__card-top">
                            <h2 className="section__title">Premium Member</h2>
                            <h2 className="pricing">$100<span>/month</span></h2>
                        </div>

                        <div className="services">
                            <ul>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Unlimited access to the gym 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Customer support 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Personal trainer 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Standard options 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    5 classes per week 
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Invite a friend every week
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-circle-fill"></i></span> 
                                    Freeze membership (no extra cost)
                                </li>
                            </ul>

                            <button className="register__btn">Join Now</button>

                        </div>
                    </div>
                </div>

            </div>
            
        </section>
    )
}

export default Pricing;