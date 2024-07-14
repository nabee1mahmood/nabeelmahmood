import React from 'react';
import './projects.css';
import videoPath from '/Users/nabeelmahmood/nabeels-portfolio-react/src/assets/download.mp4';

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className="projects-title">
                <h1>Projects</h1>
                <div className="projects-containers">
                    <div className='projects-format'>
                    <h2>Credit Card Fraud Detection</h2>
                    <p><strong>Key Steps:</strong></p>
                    <ul>
    <li><strong>Data Preprocessing:</strong> 
        <p>Loaded the dataset from a CSV file using Pandas, handled missing values by filling or dropping them, and performed feature scaling with Min-Max Scaling and Z-score normalization.</p>
    </li>
    <br />
    <li><strong>Exploratory Data Analysis (EDA):</strong> 
        <p>Visualized transaction distributions with histograms and box plots, and used correlation matrices and scatter plots to identify important feature relationships.</p>
    </li>
    <br />
    <li><strong>Model Building:</strong> 
        <p>Implemented Logistic Regression for binary classification and Decision Tree classifiers for decision-making, providing clear model interpretations.</p>
    </li>
    <br />
    <li><strong>Model Evaluation:</strong> 
        <p>Achieved high metrics: Precision (97.99%), Recall (97.97%), Accuracy (97.97%), and F1-Score (97.97%).</p>
    </li>
    <br />
    <li><strong>Conclusion:</strong> 
        <p>Both models effectively detected fraudulent transactions. Logistic Regression was simple and strong, while Decision Tree provided interpretability and insights.</p>
    </li>
    <br />
</ul>



                    </div>
            
                </div>
               
                
                    <div className="project-video">
                        <video  width="650" controls autoPlay loop>
                            <source src={videoPath} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                </div>
            </div>
        </div>
      
    );
}

export default Projects;