import React from 'react';
import './AboutUs.css'; // Import any specific CSS file if needed

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Welcome to our E-Learning Platform! We are dedicated to providing high-quality education and training to learners around the world. Our platform offers a deep understanding of various subjects for Class 10, Class 11, Class 12, and more, designed by industry experts to help you achieve your goals.
        </p>
        <p>
          Our mission is to make learning accessible and enjoyable for everyone. We believe in the power of knowledge and strive to create an engaging learning experience with interactive content, hands-on exercises, and real-world applications.
        </p>
        <p>
          Join us on this exciting journey of learning and personal growth!
        </p>
      </div>
      <div className='background'>
        <img src='https://cdn.vanderbilt.edu/vu-my/wp-content/uploads/sites/3220/2019/10/04204526/7-6.png' alt='back'/>
      </div>
    </>
  );
};

export default AboutUs;
