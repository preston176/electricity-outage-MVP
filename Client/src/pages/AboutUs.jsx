import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>Welcome to PowerWatch company! We are dedicated to providing the best service possible.</p>

            <section className="about-section">
                <h2>Our Mission</h2>
                <p>Our mission is to ensure sustainable power supply to the end-users.</p>
            </section>

            <section className="about-section">
                <h2>What Inspired This Project</h2>
                <p>
                    The inspiration for this project came from a personal experience of frequent power outages in our community.
                    As we struggled with the impacts of inconsistent electricity, we realized the need for a reliable system to monitor
                    and report power outages. This journey began as a challenge to ourselves to create a meaningful solution.
                    This project also serves as our Portfolio Project for Holberton School, showcasing our skills and dedication.
                </p>
                <p>
                    The development timeline spanned several months, during which we collaborated, learned, and overcame numerous challenges.
                    This project is a testament to our commitment to making a difference through technology.
                </p>
                <p>
                    You can learn more about Holberton School and our curriculum <a href="https://www.holbertonschool.com" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
            </section>

            <section className="about-section">
                <h2>Meet the Team</h2>
                <ul>
                    <li>
                        <strong>Team Member 1:</strong>
                        <a href="https://www.linkedin.com/in/preston-mayieka/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
                        <a href="https://github.com/preston176" target="_blank" rel="noopener noreferrer"> GitHub</a> |
                        <a href="https://twitter.com/Preston_Mayieka" target="_blank" rel="noopener noreferrer"> Twitter</a>
                    </li>
                    {/* <li>
                        <strong>Team Member 2:</strong>
                        <a href="https://www.linkedin.com/in/member2" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
                        <a href="https://github.com/member2" target="_blank" rel="noopener noreferrer"> GitHub</a> |
                        <a href="https://twitter.com/member2" target="_blank" rel="noopener noreferrer"> Twitter</a>
                    </li> */}
                </ul>
            </section>

            <section className="about-section">
                <h2>Project Repository</h2>
                <p>
                    You can find the GitHub repository for this project <a href="https://github.com/preston176/electricity-outage-MVP" target="_blank" rel="noopener noreferrer" draggable={true}>here</a>.
                </p>
            </section>

            <section className="about-section">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us.</p>
            </section>
        </div>
    );
};

export default AboutUs;
