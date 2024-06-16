import React from 'react';
import './services.css';

const Services = () => {
    return (
        <div id ='experience' className='services'>
            <div className="services-title">
                <h1>Professional Experience</h1>
                <div className="services-containers">
                    <div className='services-format'>
                        <h2>Experience</h2>
                        <h3>IoT Engineering Intern</h3>
                        <h4 style={{ color: "red" }}>ABB</h4>
                        <p>December 2023 - August 2024</p>
                        <ul>
                        <li>Was assigned the lead on the Paint Oven Project to integrate real-time data from a paint oven into ThingWorx, capturing crucial metrics such as relative humidity (maintained at optimal levels between <span style={{ color: 'red' }}>40-60%</span> for paint curing), temperature (controlled within a range of <span style={{ color: 'red' }}>70-90°F</span> for efficient curing and quality), and oven run time (monitored and optimized to reduce energy consumption by <span style={{ color: 'red' }}>20%</span>).</li>


                            <br />
                            <li>Created real-time IoT dashboards using ThingWorx and JavaScript which contribute to data-driven decision-making and process optimization efforts within the organization.</li>
                        </ul>
                        <h3>IT Intern</h3>
                        <h4 style={{ color: "red" }}>ABB</h4>
                        <p>May 2023 - December 2023</p>
                        <ul>
                            <li>Provided first-level contact and problem resolution for all users with hardware, software, and network issues in a diverse user environment (e.g., Engineering, Manufacturing, Financial, Quality, and Maintenance).</li>
                            <br />
                            <li>Worked with team members in troubleshooting and performed root-cause analysis for resolving problems that had multiple dependencies (PC workstations, servers, databases, software products, etc.)</li>
                        </ul>
                    </div>
                    <div className='services-format'>
                        <h2>Education</h2>
                        <h3 className="large-heading">University of Arkansas - Fort Smith</h3>
                        <h4>Bachelor of Science in Computer Science</h4>
                        <h4>Concentration: Data Science and Artificial Intelligence</h4>
                        <h4>Minor: Mathematics</h4>
                        <h4>August 2021 - December 2025 (Expected)</h4>
                        <br />
                        <h3>Relevant Coursework:</h3>
                        <ul>
                            <li>Data Structures - In this course, I was introducted into the fundamental aspects of Data Structures. The main lessons covered were essential structures 
                                such as Arrays, Linked Lists, Stacks & Queues, Hash Tables, and Binary Search Trees. Each structure was thoroughly explored through assignments, ensuring not just the ability to 
                                implement them, but also a deep understanding of their functionalities. Throughout the course, the significance of these structures became evident as I learned about their 
                                diverse applications and the trade-offs between their runtimes. This knowledge equipped me to make 
                                informed decisions about which structure to employ based on efficiency and Big O notation.

                            </li>
                            <br />
                            <li>Artificial Intelligence</li>
                            <br />
                            <li>Discrete Mathematics I, II</li>
                            <br />
                            <li>Applied Linear Algebra</li>
                            <br />
                            <li>Foundations of Programming I, II</li>
                        </ul>
                    </div>
                    <div className='services-format'>
                        <h2>Skills</h2>
                        
                            <h3>Programming Languages: </h3>
                            
                           <li>Java</li>
                            <li>Python</li>
                            <li>R</li>
                            <li>SQL</li>
                            <li>C</li>
                            <br />

                            <h3>Operating Systems: </h3>
                           <li>Windows</li> 
                           <li>Linux</li>
                           <li>MacOS</li>
                           <li>Ubuntu</li>
                           <br />

                            <h3>Database Systems:</h3>
                            <li>MySQL</li>
                            <br />
                           

                    
                        
                        <h3>Certificates</h3>
                            <li>Google Data Analytics Certificate</li>
                            <br />
                         

                            <h3>Other Skills</h3>
                            <li>Problem-Solving Skills</li>
                            <li>Criticial Thinking</li>
                            <li>Efficient</li>
                            <li>Commuinication</li>
                            <li>Teammwork</li>
                    </div>

                  
                </div>
            </div>
        </div>
    );
}

export default Services;