import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeader from "../../components/pageHeaderContent";
import './style.scss';
import {DiWebplatform} from 'react-icons/di';
import {FaDev,FaDatabase, FaPython, FaCuttlefish, FaJsSquare} from 'react-icons/fa';
import { SiAmazonaws, SiTensorflow } from 'react-icons/si'; 
import { AiOutlineGithub } from 'react-icons/ai';

import { AiOutlineRobot } from 'react-icons/ai'; // Robot icon for AI
import { BiBrain } from 'react-icons/bi'; // Brain icon for Machine Learning

import { FaCogs } from 'react-icons/fa';
const About = () => {
  const personalDetails = [
    {
      label: "Name",
      value: "Khizra Ghaffar",
    },
    {
      label: "Phone Number",
      value: "+358 41 5779323",
    },
    {
      label: "Email",
      value: "khizraghaffar1300@gmail.com",
    },
    {
      label: "Address",
      value: "Oulu, Finland",
    },
    {
      label: "GitHub Profile",
      value: "https://github.com/khizraghaffarkk",
    },
  ];
  const jobSummary =
    "I am a Software Engineer with a passion for programming, test automation, artificial intelligence, and cloud technologies. I am actively seeking exciting opportunities in the software development field to further refine my skills and thrive in a competitive environment. With a Master’s in Information Processing Science from the University of Oulu and extensive hands-on experience, I have developed a strong foundation in testing, automation, data analytics, machine learning, and DevOps methodologies. Proficient in Python and C++, I have expertise in workflow automation and am comfortable working with Linux, Windows Subsystem for Linux (WSL), and Windows. Throughout my career, I have focused on enhancing AI capabilities, improving development processes, and optimizing testing and automation environments. I am eager to contribute my skills to innovative projects in dynamic and forward-thinking environments.";

  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <h3>Sofware Engineer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <h3 className="personalInformationh3Tag">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        {/* 2nd div */}
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div><FaCogs size={60} color="var(--yellow-theme-main-color)" /></div>
            <div><SiAmazonaws size={60} color="var(--yellow-theme-main-color)"/></div> {/* Cloud (AWS) */}
            <div><FaDev size={60} color="var(--yellow-theme-main-color)"/></div>
            <div><FaPython size={60} color="var(--yellow-theme-main-color)"/></div> 
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
