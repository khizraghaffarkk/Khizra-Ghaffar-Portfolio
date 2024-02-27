import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeaderContent";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import Pass from "../../images/pass.jpg";
import Notes from "../../images/notes.jpg";
import Rate from "../../images/rating.jpg";
import AgeCal from "../../images/age_calculator.jpg";
import TipCal from "../../images/tip_calculator.jpg";
import Notifica from "../../images/notific.jpg";
import Respons from "../../images/respo.jpg";
import Dashb from "../../images/dashboard.jpg";
import Banner from "../../images/banner.jpg";
import Ecom from "../../images/ecomm.jpg";
import ImageSE from "../../images/images.png";
import Weather from "../../images/weather.png";
import Quote from "../../images/quote.jpg";
import Crypto from "../../images/crypto.jpg";
import Github from "../../images/github.avif";
import Todo from "../../images/todo.avif";
import ExpMid from "../../images/middlewre.avif";
import Crud from "../../images/crud.png";
import DataV from "../../images/dataV.webp";
import Docker from "../../images/docker.png";
import DockerA from "../../images/dockerA.png";
import Kuber from "../../images/kuber.webp";
import KuberA from "../../images/kuberA.png";
import DevOps from "../../images/devops.webp";
import TextS from "../../images/textS.png";
import EC from "../../images/ec.avif";
import Career from "../../images/career.png";
import MongoDb from "../../images/mongo.png";
import Expense from "../../images/expense.jpg";


import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const portfolioData = [
  {
    id: 2,
    name: "Random Password",
    link: "https://random_password_generator.surge.sh/",
    image: Pass,
  },
  {
    id: 2,
    name: "Notes Creation App",
    link: "https://notes_creating_application.surge.sh/",
    image: Notes,
  },
  {
    id: 2,
    name: "Rating Page",
    link: "https://rating_card.surge.sh/",
    image: Rate,
  },
  {
    id: 2,
    name: "Age Calculator",
    link: "https://age_calculator.surge.sh/",
    image: AgeCal,
  },
  {
    id: 2,
    name: "Tip Calculator",
    link: "https://tip_calculator_application.surge.sh/",
    image: TipCal,
  },
  {
    id: 2,
    name: "Notification Page",
    link: "https://notification_page.surge.sh/",
    image: Notifica,
  },
  {
    id: 2,
    name: "Responsive WebPage",
    link: "https://responsive_webpage-design.surge.sh/",
    image: Respons,
  },
  {
    id: 2,
    name: "Illustration Dashboard",
    link: "https://illustration_dashboard.surge.sh/",
    image: Dashb,
  },
  {
    id: 2,
    name: "Banner Design",
    link: "https://banner_design.surge.sh/",
    image: Banner,
  },
  {
    id: 2,
    name: "Ecommerce Project",
    link: "https://github.com/khizraghaffarkk/Ecommerce-Project",
    image: Ecom,
  },
  {
    id: 3,
    name: "Image Search Engine",
    image: ImageSE,
    link: "https://image_search_engine.surge.sh/",
  },
  {
    id: 3,
    name: "Weather Forecast",
    image: Weather,
    link: "https://weather_forecast_data.surge.sh",
  },
  {
    id: 3,
    name: "Quote Generator",
    image: Quote,
    link: "https://quote_generator_with-api.surge.sh",
  },
  {
    id: 3,
    name: "Cryptocurrency-Webpage",
    image: Crypto,
    link: "https://cryptocurrency_webpage.surge.sh",
  },
  {
    id: 3,
    name: "GitHub Application",
    image: Github,
    link: "https://githubapp.surge.sh",
  },
  {
    id: 3,
    name: "Expense Tracker",
    image: Expense,
    link: "https://unwritten-wax.surge.sh/",
  },
  {
    id: 4,
    name: "Todo Application",
    image: Todo,
    link: "https://todotask-khizraghaffar1300-gmailcom.vercel.app/",
  },
  {
    id: 4,
    name: "Express-Middleware",
    image: ExpMid,
    link: "https://github.com/khizraghaffarkk/Express-Middleware",
  },
  {
    id: 4,
    name: "CRUD Operations",
    image: Crud,
    link: "https://github.com/khizraghaffarkk/CRUD-Operations",
  },
  {
    id: 4,
    name: "Data Validations",
    image: DataV,
    link: "https://github.com/khizraghaffarkk/Data-Validations?tab=readme-ov-file",
  },
  {
    id: 5,
    name: "Docker Basics",
    image: Docker,
    link: "https://github.com/khizraghaffarkk/Docker-Basis",
  },
  {
    id: 5,
    name: "Docker Advanced",
    image: DockerA,
    link: "https://github.com/khizraghaffarkk/Docker-Advanced",
  },
  {
    id: 5,
    name: "Kubernetes Basics",
    image: Kuber,
    link: "https://github.com/khizraghaffarkk/Kubernetes-Basics",
  },
  {
    id: 5,
    name: "Kubernetes Advanced",
    image: KuberA,
    link: "https://github.com/khizraghaffarkk/Kubernetes-Advanced",
  },
  {
    id: 5,
    name: "DevOps Project",
    image: DevOps,
    link: "https://github.com/khizraghaffarkk/DevOps-Project-Work",
  },
  {
    id: 6,
    name: "Text Summerization App",
    image: TextS,
    link: "https://github.com/khizraghaffarkk/Python-Project",
  },
  {
    id: 6,
    name: "Event Calendar",
    image: EC,
    link: "https://github.com/khizraghaffarkk/Python-Project",
  },
  {
    id: 7,
    name: "Career Guider Prototype",
    image: Career,
    link: "https://www.figma.com/proto/dyvzXBsMsIHD8FUoHzkaeo/Career-Guider-Mobile-Application?type=design&node-id=13-3&t=Q92gDauRdUcN9tQv-1&scaling=scale-down&page-id=0%3A1",
  },
  {
    id: 8,
    name: "Schema Design",
    image: MongoDb,
    link: "https://github.com/khizraghaffarkk/MongoDB-Schema-Designing",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Web Developement",
  },
  {
    filterId: 3,
    label: "Web API",
  },
  {
    filterId: 4,
    label: "Express JS",
  },
  {
    filterId: 5,
    label: "DevOps",
  },
  {
    filterId: 6,
    label: "Python",
  },
  {
    filterId: 7,
    label: "Design",
  },
  {
    filterId: 8,
    label: "Database",
  }
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  // const [glink,setGlink]=useState();
  // const history = useHistory();

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  // function openPage(id){
  //   //history.push(id.link);
  //   console.log("idd;;;::",setGlink(id));

  // }

  // console.log("====================================");
  // console.log(hoveredValue);
  // console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeader 
        headerText="My Portfolio" 
        icon={<BsInfoCircleFill size={40} />} />
        <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <Link to={item.link} target="_blank"><button>Visit</button></Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
