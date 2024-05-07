import dynamic from "next/dynamic";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CountersSection from "@components/sections/Counters";
import RenovationSection from "@components/sections/Renovation";

const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const About = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"About Us"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>Construction industry representing the interests of small and medium-sized building companies</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>Who We Are?</h3>
                  <p>Welcome to Agile Job Solution, where our passion for excellence drives us to provide top-tier personnel and management solutions to businesses across various industries. Founded in 2018, we have steadily grown into a trusted partner for companies seeking to enhance their operational capabilities through skilled outsourcing.</p>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-1.jpeg" alt="About Image One" />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>Our Values</h3>
                  <ul>
                    <li><i className="fa-solid fa-circle-dot" /> We operate with honesty and uphold the highest standards of moral and ethical conduct.</li>
                    <li><i className="fa-solid fa-circle-dot" /> We continuously seek innovative solutions to improve our services and the outcomes for our clients.</li>
                    <li><i className="fa-solid fa-circle-dot" /> We are committed to excellence in everything we do, from client service to the personal development of our employees.</li>
                    <li><i className="fa-solid fa-circle-dot" /> We believe in building strong, collaborative relationships with our clients, ensuring that we are not just providers but partners in their success.</li>
                  </ul>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-3.jpeg" alt="About Image Two" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

      <CountersSection />

      {/*About How It Works Start */}
      <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Plan + Control</span>
          <h2>How it Works</h2>
        </div>
        <div className="container">
          <figure style={{"position": "relative", "zIndex": "9"}}>
            <img className="w-100" src="/img/gallery-2.jpeg" alt="About How It Works" />
          </figure>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  1.
                </div>
                <h3>Initial Consultation</h3>
                <p>Discuss your business needs and staffing challenges to tailor our services.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  2.
                </div>
                <h3>Talent Matching</h3>
                <p>Utilize advanced tools to match the right talent to your specific requirements.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  3.
                </div>
                <h3>Management</h3>
                <p>Seamlessly integrate our personnel into your team with full support and training</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  4.
                </div>
                <h3>Quality Control</h3>
                <p>Provide continuous management and performance assessments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About How It Works End */}

      {/*About Key Benefits Start */}
      <section className="gap about-key-benefits">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" >
              <div className="data">
                <figure>
                  <img className="w-100" src="/img/service2.jpeg" alt="About key Benefits" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="data">
                <h2>Our Services</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Talent Acquisition: We source and place top talent where it is needed most, tailored to the specific requirements of each client.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Personnel Management: We offer full-scale management of outsourced staff, including payroll, compliance, and performance evaluations.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Strategic Staffing Solutions: We design staffing strategies that align with the overarching goals of our clients, enhancing their workforce capabilities.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Key Benefits End */}

      <TeamSlider noTop />

      <RenovationSection />

      <TestimonialSlider />

      <PartnersSlider noTop />
      
    </Layouts>
  );
};
export default About;