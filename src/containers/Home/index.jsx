import React from "react";
import './style.scss';
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = ()=>{
    const navigate=useNavigate();

    const navigateToContactPage=()=>{
        navigate("/contact");
    }
    function openEmail() {
        // Specify the email address
        var email = 'khghaffa23@student.oulu.fi';

        // Create the mailto link
        var mailtoLink = 'mailto:' + email;

        // Open the default email client
        window.location.href = mailtoLink;
    }
    // const downCV = () => {
    //   const resumeFilePath = "http://localhost:3000/k.pdf"; // Path to your resume file in the public directory
    //   const anchor = document.createElement('a');
    //   anchor.href = resumeFilePath;
    //   anchor.download = "Khizra_Ghaffar_CV.pdf"; // Name for the downloaded file
    //   anchor.type = "application/pdf";
    //   document.body.appendChild(anchor);
    //   anchor.click();
    //   document.body.removeChild(anchor);
    // };

    const downCV = async () => {
        const resumeFilePath = "http://localhost:3000/k.pdf"; // Adjust the file path accordingly
      
        try {
          const response = await fetch(resumeFilePath);
          const blob = await response.blob();
          
          // Create a link element
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'Khizra_Ghaffar_CV.pdf';
      
          // Append the link to the body
          document.body.appendChild(link);
      
          // Simulate a click on the link
          link.click();
      
          // Remove the link from the body
          document.body.removeChild(link);
      
        } catch (error) {
          console.error('Error downloading the file:', error);
        }
      };
      
    return(
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>I am Khizra Ghaffar 
                    <br/>
                    a Software Engineer</h1>
            </div>
            <Animate
            play
            duration={1}
            delay={1}
            start={{
                transform:'translateY(550px)'
            }}
            end={{
                transform:'translateY(0px)'
            }}
            >
              <div className="home__contact-me">
                <button onClick={openEmail}>Hire Me</button>
                <button onClick={downCV}>Download Resume</button>
              </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/khizra-ghaffar-253512221/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fw" icon={faLinkedin} size="5x" />
                </a>
                <a href="https://github.com/khizraghaffarkk" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="5x" />
                </a>
              </div>
            </Animate>
            
        </section>
    )
}

export default Home;