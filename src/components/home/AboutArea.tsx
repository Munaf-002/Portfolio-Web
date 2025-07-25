 
import Count from '../common/Count'

const counter_data = [
  {
    id: 1,
    title: 'Years Of Experience',
    count: 1,
    cls: "plus",
  },
  {
    id: 2,
    title: 'Completed Projects',
    count: 1,
    cls: "k-plus",
  },
  {
    id: 3,
    title: 'Client Satisfactions',
    count: 90,
    cls: "percent",
  },
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">About Me</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>I am Syed Munaf Ahmed, ’m a multi-skilled professional currently working as an ERP & Billing Executive while also growing as a web developer. With experience in ERP systems, Excel-based reporting, and structured documentation, I help businesses manage data, automate workflows, and maintain financial accuracy.
                <br /><br />
                On the development side, I specialize in building modern, responsive websites using WordPress and React.js. I combine technical functionality with intuitive user interfaces, ensuring smooth digital experiences for both businesses and users.
                <br /><br />
                Currently, I’m pursuing a Bachelor’s in Computer Science (BSCS), aiming to specialize in ERP consulting, data analytics, and enterprise-level web solutions.</p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
