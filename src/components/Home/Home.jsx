import React from "react";
import { Carousel } from "react-bootstrap"; // Import Bootstrap Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import collage from "../../assets/collage-removebg-preview.png"; // FIXED IMPORT
import m from "../../assets/men-removebg-preview.png";
import help from "../../assets/help-removebg-preview.png";

function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Card 1 */}
        <div className="col-sm-6">
          <div className="card-body first">
            <h2 className="card-title">
              Bridge to the future is built with the strength of innovation and the vision of progress.
            </h2>
            <br />
            <p className="card-text">
              Empowering innovation, SmartBridge builds smarter paths that bridge gaps between people, ideas, and progress.
            </p>
            <a href="/mentors" className="btn btn-primary">
              Explore Mentors
            </a>
          </div>
        </div>

        {/* Card 2 with Carousel */}
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <Carousel interval={2000} controls={true} indicators={true} pause="hover">
                <Carousel.Item>
                  <img className="d-block w-100" src="https://cdn.prod.website-files.com/5d26256b528d2e079bc08d82/622f3b0c4423ac76de1bc765_16.png" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="https://cdn.prod.website-files.com/5d26256b528d2e079bc08d82/618e8bfbb4373c842a1c74cf_Untitled%20design%20(10).png" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="https://www.sfgmentornet.com/wp-content/uploads/2022/05/2.png" alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <br /><br />
      <div className="text-center">
        <h2 className="card-title" style={{ color: "rgb(30, 83, 136)" }}>Features</h2>
        <h3 className="card-text text-blue">What you can do by signing up to the platform here?</h3>
      </div>

      {/* Features Grid */}
      <div className="container mt-5">
        <div className="row">
          {/* Feature Cards */}
          {[
            { title: "Why Choose Mentor?", text: "A mentor brings years of experience, offering valuable insights and knowledge." },
            { title: "Find Mentor with your interest", text: "Explore the network of seasoned mentors, ready to illuminate your career path." },
            { title: "Continuous Learning and Development", text: "Embark on a journey of continuous growth through curated resources and tailored learning paths." },
            { title: "Convenient Scheduling, Anytime, Always", text: "Enjoy the flexibility of scheduling mentor sessions and accessing learning materials anytime." },
            { title: "User-Friendly Platform, Seamless Experience", text: "Navigate our intuitive platform effortlessly for an enjoyable experience." },
            { title: "Enhance Skills with Industry Experts", text: "Elevate your skills and knowledge by learning directly from industry experts." }
          ].map((feature, index) => (
            <div className="col-sm-6 mb-4" key={index}>
              <div className="card">
                <div className="card-body first">
                  <h2 className="card-title" style={{ color: "rgb(30, 83, 136)" }}>{feature.title}</h2>
                  <br />
                  <p className="card-text">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row justify-content-center">
  <div className="text-center">
    <img 
      src={m}  
      alt="Collage Section"
      className="img-fluid px-3 rounded-5 image-hover-effect" 
      style={{ maxWidth: "100%", height: "auto", width: "400px" }} 
    />
    <img 
      src={collage}  
      alt="Collage Section"
      className="img-fluid px-3 rounded image-hover-effect"  
      style={{ maxWidth: "100%", height: "auto", width: "400px" }} 
    />
    <img 
      src={help}  
      alt="Collage Section"
      className="img-fluid px-3 rounded-4 image-hover-effect"  
      style={{ maxWidth: "100%", height: "auto", width: "400px" }} 
    />
  </div>
</div>




    </div>
  );
}

export default Home;
