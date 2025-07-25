 
export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>Syed Munaf Ahmed</h2>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">

              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  {/* <ul className="clienti-profile">
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/01.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/02.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/03.jpg" alt="client" />
                    </li>
                  </ul> */}
                  <br />
                  <div className="reviews">ERP & Billing Executive • Web Developer  
                    <p>Hi, I’m Munaf, Combining ERP-driven business analysis with responsive web development. Crafting solutions that bridge data accuracy, workflow efficiency, and user-centric design.</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="assets/images/about/Munaf.jpg" alt="" />
              </div>

            </div>
            <div className="col-lg-3 pt-80">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <br /><br /><br />
                <a className="theme-btn" href="">Get In touch</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
