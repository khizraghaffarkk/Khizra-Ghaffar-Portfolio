import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeader from "../../components/pageHeaderContent";
import './style.scss';
import {DiApple,DiWebplatform} from 'react-icons/di';
import {FaDev,FaDatabase, FaPython} from 'react-icons/fa';

const About = () => {
  const personalDetails = [
    {
      label: "Name",
      value: "Khizra Ghaffar",
    },
    {
      label: "Phone Number",
      value: "+358 41 720 7828",
    },
    {
      label: "Email",
      value: "khghaffa23@student.oulu.fi",
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
    "I am deeply passionate about the intricate process of designing and testing software applications. My goal is to keep getting better, grab every chance to learn, and do great in the competitive professional world. I truly believe that improving these skills will not only help me grow personally but also take my professional journey to new heights, driving me towards excellence and innovation in the exciting world of software development.";

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
            <div><DiWebplatform size={60} color="var(--yellow-theme-main-color)"/></div>
            <div><FaDev size={60} color="var(--yellow-theme-main-color)"/></div>
            <div><FaDatabase size={60} color="var(--yellow-theme-main-color)"/></div>
            <div><FaPython size={60} color="var(--yellow-theme-main-color)"/></div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
