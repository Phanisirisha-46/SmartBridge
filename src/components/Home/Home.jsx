import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap"; // Import Bootstrap Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import collage from "../../assets/collage-removebg-preview.png"; // FIXED IMPORT
import m from "../../assets/men-removebg-preview.png";
import help from "../../assets/help-removebg-preview.png";
import { MdPersonAdd } from "react-icons/md"; 
import "./Home.css";
import steps from "../../assets/steps.png";
import  Faq from '../../components/FAQ/Faq';
import Books from '../../components/Books/Books';

function Home() {
  useEffect(() => {
    // Function to animate numbers
    const animateNumbers = () => {
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        const target = +stat.getAttribute('data-target'); // Final number
        const duration = 2000; // Total animation time in milliseconds
        const interval = 30; // Time between updates in milliseconds
        const increment = Math.ceil(target / (duration / interval)); // Increment per interval
        let current = 0;

        const updateNumber = setInterval(() => {
          current += increment;
          if (current >= target) {
            stat.textContent = target.toLocaleString(); // Format number with commas
            clearInterval(updateNumber); // Stop the interval
          } else {
            stat.textContent = current.toLocaleString();
          }
        }, interval);
      });
    };
      // Start animation on component mount
      animateNumbers();
    }, []);

  const [hovered, setHovered] = useState(false);

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    width: "400px",
    transition: "all 0.3s ease-in-out",
    transform: hovered ? "scale(0.9)" : "scale(1)",
    boxShadow: hovered ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none"
  };

  return (

    <div className="container mt-5">
      {/* Add Mentor Button */}
      <div className="text-center mb-4">
        <button className="btn btn-success">
          <MdPersonAdd className="me-2" /> Add as a Mentor
        </button>
      </div>

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

     
    
      <div className="stats-container">
      <div className="stats-card">
        <div className="stat">
          <span className="stat-number" data-target="95">0</span>%
          <p>Happy Members</p>
        </div>
        <div className="stat">
          <span className="stat-number" data-target="100">0</span>%
          <p>Expert Mentors</p>
        </div>
        <div className="stat">
          <span className="stat-number" data-target="500">0</span>+
          <p>Active Users</p>
        </div>
      </div>
    </div>


      
      

      {/* Features Section */}
      <br /><br />
      <div id="features" className="text-center">
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
              <div className="card"  style={{ boxShadow: "0 4px 8px rgba(0, 0, 139, 0.5)" }}>
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

      {/* Image Section with Hover Effect */}
      <div className="row justify-content-center">
        <div className="text-center">
          <img
            src={m}
            alt="Collage Section"
            className="img-fluid px-3 rounded-5 image"
            style={imageStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
          <img
            src={collage}
            alt="Collage Section"
            className="img-fluid px-3 rounded image"
            style={imageStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
          <img
            src={help}
            alt="Collage Section"
            className="img-fluid px-3 rounded-4 image"
            style={imageStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>
      </div>
     
        <br/><br/>
        <div className="card">
  <div className="image-container">
    <img
      src="https://som.georgetown.edu/wp-content/uploads/2022/07/student-advising.png"
      alt="Notebook"
      className="img-fluid"
    />
    <div className="content">
      <p>
        Smart Bridge helps the whole world by bridging the gap between IT and various sectors, enabling innovation, efficient problem-solving, and enhancing global connectivity. It empowers individuals and organizations through technology-driven solutions, fostering collaboration and progress worldwide.
      </p>
    </div>
  </div>
</div>


      
          <br /><br />
      <div id="steps" className="text-center">
        <h2 className="card-title" style={{ color: "rgb(30, 83, 136)" }}>Steps</h2>
        <h3 className="card-text text-blue">What are the steps to Follow?</h3>
      </div>
          <br/>
    <div className="card">
  <div className="gud">
    <img
      src={steps}
      alt="Notebook"
      className="img-fluid"
    />
  </div>
</div>
<br/><br/>
          <Faq/>

          <Books/>
    </div>
  );
}

export default Home;
