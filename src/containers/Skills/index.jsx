import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeader from "../../components/pageHeaderContent";
import './utils.js';
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { skillsData } from "./utils.js";
import { Line } from "rc-progress";
import './style.scss';

const Skills = ()=>{
    return(
     <section id="skills" className="skills">
      <PageHeader 
        headerText="My Skills" 
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className="skills__content-wrapper">
          {
            skillsData.map((item,i)=>(
              <div key={i} className="skills__content-wrapper__innerContent">
                <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: 'translateX(-200px)'
                  }}
                end={{
                  transform: 'translateX(0px)'
                  }}
                  >
                    <h3 className="skills__content-wrapper__innerContent__category-text">{item.label}</h3>
                    <div className="skills__content-wrapper__innerContent__category-text__proressbar-container">
                      {
                        item.data.map((skillitem,i)=>(
                          <AnimateKeyframes
                          play
                          duration={1}
                          keyframes={["opacity:1","opacity:0"]}
                          iterationCount="1"
                          >
                           <div className="progressbar-wrapper" key={i}>
                            <p>{skillitem.skillName}</p>
                            <Line 
                             percent={skillitem.percentage}
                             strokeColor="var(--yellow-theme-main-color)"
                             strokeWidth={2}
                             trailWidth="2"
                             strokeLinecap="round"
                            />
                            </div> 
                          </AnimateKeyframes>
                        ))
                      }
                    </div>
                </Animate>
              </div>
            ))
          }
        </div>
     </section>
    )
}

export default Skills;