import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp.'
import "./About.css"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about-main">
          <div className="about-container">
          <h1>Welcome to IBP Excellence Academy</h1>
          <p>Your dedicated partner in mastering Integrated Business Planning (IBP). Since 2018, we have been at the forefront of training professionals and organizations to excel in the dynamic world of business planning.</p>
                   
            <h2>Our Mission</h2>
            <p>Our mission is to empower businesses with the knowledge and skills they need to achieve operational excellence through effective IBP strategies. We believe that well-implemented IBP practices not only streamline processes but also drive growth and profitability.</p>
          </div>

          <div className="about-container">
            <h2>Who We Are ?</h2>
            <p>At IBP Excellence Academy, we are a team of seasoned experts with extensive experience in Integrated Business Planning. Our instructors bring a wealth of practical knowledge and industry insight to every training session, ensuring that our clients receive the highest quality education.</p>
          </div>

          <div className="about-container">
            <h2>What We Offer ?</h2>
            <h4>We provide comprehensive train programs designed to cater to various levels of expertise, from beginners to advanced practitioners. Our offerings include:</h4>
            <div className="about-box">
            <ul>
              <li><strong>In-Person Workshops:</strong> Hands-on sessions led by industry experts to help you grasp the fundamentals and advanced techniques of IBP.</li>
              <li><strong>Online Courses:</strong> Flexible, self-paced learning modules that fit into your busy schedule.</li>
              <li><strong>Custom Training Solutions:</strong> Tailored programs to meet the specific needs of your organization and team.</li>
            </ul>
            </div>
          </div>

          <div className="about-container">
            <h2>Why Choose Us ?</h2>
            <h4>We offer:</h4>
            <div className="about-box">
            <ul>
              <li><strong>Expert Instructors:</strong> Our trainers are industry veterans with real-world experience and a passion for teaching.</li>
              <li><strong>Practical Approach:</strong> We focus on actionable insights and practical applications, not just theoretical knowledge.</li>
              <li><strong>Proven Results:</strong> Our training has helped numerous organizations optimize their planning processes and achieve measurable improvements.</li>
            </ul>
            </div>
          </div>

          <div className="about-container">
          <h2>Our Commitment</h2>
          <p>We are committed to providing exceptional training experiences that deliver real value. Whether you are looking to enhance your personal skills or improve your organization’s planning capabilities, we are here to support you every step of the way.</p>

          <p>Thank you for considering IBP Excellence Academy. We look forward to helping you succeed in your IBP journey.</p>
        </div>
        </div>
        </div>
        


        <Whatsapp />

        <Footer />
      </>

      )
}

      export default About