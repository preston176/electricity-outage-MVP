import React from 'react';
import './AboutUs.css'; // Assuming you have a CSS file for styling

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>Welcome to PowerWatch company! We are dedicated to providing the best service possible.</p>
            <section className="about-section">
                <h2>Our Mission</h2>
                <p>Our mission is to ensure sustainable power supply to the end-users</p>
            </section>
            <section className="about-section">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us.</p>
            </section>
        </div>
    );
};

export default AboutUs;
