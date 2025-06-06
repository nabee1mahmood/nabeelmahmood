import React from 'react';
import './projects.css';
import videoPath from '/Users/nabeelmahmood/nabeels-react-portfolio/src/assets/download.mp4';
import demoVideo from '/Users/nabeelmahmood/nabeels-react-portfolio/src/assets/NLPDiscordBotRecording.mp4'


const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className="projects-title">
                <h1>Projects</h1>
                <div className="projects-containers">
                    <div className='projects-format'>


                        <h2>Natural Language Processing Discord Bot</h2>
                        <p><strong>Key Features:</strong></p>
                        <ul>
                            <li><strong>Dataset:</strong>
                                <p>Used a Shakespeare dataset provided by the course as training data for the language model.</p>
                            </li>
                            <br />
                            <li><strong>Preprocessing:</strong>
                                <p>Text was tokenized by splitting on spaces, converting to lowercase, and removing punctuation for consistency.</p>
                            </li>
                            <br />
                            <li><strong>Language Model:</strong>
                                <p>Built unigram, bigram, and trigram frequency tables using dictionaries. Bigram probabilities were smoothed using Laplace smoothing, and trigram predictions used backoff when needed.</p>
                            </li>
                            <br />
                            <li><strong>Prediction:</strong>
                                <p>The bot generates 10 words to complete a user's input using both bigram and trigram models. It also calculates and displays the log probability of each generated sentence.</p>
                            </li>
                            <br />
                            <li><strong>Bot Setup:</strong>
                                <p> The bot listens for messages and responds with sentence completions in real time.</p>
                            </li>
                            <br />
                        </ul>


                    </div>
                </div>


  <div className="project-video-nlp">
                    <video width="825" height="600" controls autoPlay loop>
                        <source src={demoVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
         

                <br />
                <br />
                <br />
                <br />
         


                <div className="projects-containers">
                    <div className='projects-format'>


       <h2>Credit Card Fraud Detection</h2>
<p><strong>Key Steps:</strong></p>
<ul>
    <li><strong>Dataset:</strong>
        <p>The dataset was loaded from a CSV file using pandas and was from Kaggle .</p>
    </li>
    <br />
    <li><strong>Exploratory Data Analysis (EDA):</strong>
        <p>Missing values were handled by either filling or removing them, and feature scaling was applied using both Min-Max scaling and Z-score normalization.</p>
    </li>
    <br />
    <li><strong>Model Building:</strong>
        <p>A Logistic Regression model was trained to classify transactions as either fraudulent or not. The goal was to build a reliable binary classification system.</p>
    </li>
    <br />
    <li><strong>Model Evaluation:</strong>
        <p>The model performed well, with strong results across all metrics — 98.02% precision, 98.00% recall, 98.00% accuracy, and a 98.00% F1-score.</p>
    </li>
    <br />
    <li><strong>Conclusion:</strong>
        <p>Logistic Regression provided a simple and effective approach to detecting fraud, balancing accuracy with ease of implementation.</p>
    </li>
    <br />
</ul>

</div>
</div>

                <div className="project-video">
                    <video width="650" controls autoPlay loop>
                        <source src={videoPath} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>

    );
}

export default Projects;