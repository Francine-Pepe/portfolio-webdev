import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import bespoke from "./../../Images/BF_Logo.png";
import photopedia from "./../../Images/photopedia_logo_transparent.png";
import healthyLife from "./../../Images/Healthy Life-logos_transparent.png";
import easyPeasy from "./../../Images/easy_peasy-logo_transparent.png";
import todolist from "./../../Images/checklist.png";
import "./Projects.css";
import ProjectTitle from "./ProjectTitle";
import Sunnyside from "./../../Images/desktop-preview.jpg";

export default function ProjectsCards(props, index) {
  const projects = [
    {
      id: "5",
      name: "Sunnyside",
      description: "Frontend challenge from frontendmentor.io",
      image: Sunnyside,
      github: "https://github.com/Francine-Pepe/sunnyside",
      link: "https://francine-pepe.github.io/sunnyside/",
      technologies: "HTML 5 |  CSS 3  |  React  |  JavaScript",
    },
    {
      id: "4",
      name: "Todo List",
      description: "Basic but useful Todo List.",
      image: todolist,
      github: "https://github.com/Francine-Pepe/todo",
      link: "https://francine-pepe.github.io/todo/",
      technologies: "HTML 5 |  CSS 3  |  React  |  JavaScript",
    },
    {
      id: "0",
      name: "Bespoke Fashion",
      description:
        "Here the customer will be able to choose the design, prints or colors.",
      image: bespoke,
      github: "https://github.com/Francine-Pepe/bespokefashion",
      link: "https://bespokefashion.netlify.app/",
      technologies:
        "React JS  |  MongoDB  |  Node JS  |  Express  |  Material UI  |  React Bootstrap  |  Adobe XD",
    },
    {
      id: "1",
      name: "Photopedia",
      description: "Website made from photografers for photografers",
      image: photopedia,
      github: "https://github.com/TheCodingBrie/Photopedia",
      link: "",
      technologies:
        "React JS  |  MongoDB  |  Node JS  |  Express  |  Material UI  |  React Bootstrap  |  Adobe XD",
    },
    {
      id: "2",
      name: "Healthy Life",
      description:
        "A place that brings together everything for a good and healthy life",
      image: healthyLife,
      github: "https://github.com/jennyy89/healthylife",
      link: "",
      technologies: "React JS |  React Bootstrap  |  Contentful  |  Adobe XD",
    },
    {
      id: "3",
      name: "Easy Peasy",
      description: "Food blog with all kinds of easy food",
      image: easyPeasy,
      github: "https://github.com/garciamarin/Easy-Peasy",
      link: "",
      technologies: "HTML 5 |  CSS 3  |  Bootstrap  |  Adobe XD",
    },
  ];

  return (
    <>
      <div className="cards_container" id="projects">
        {/* <div className="opacity_container"> */}
        <ProjectTitle title="PROJECTS" key={index} />
        <h1> {props.title} </h1>

        {/* <div className="opacity_projects"> */}
        {projects.map((projects, id, item) => (
          <Card
            className="cards"
            // onMouseOver={() => setShow(true)}
            // onMouseOut={() => setShow(false)}
            key={projects.id}
            sx={{
              width: "22em",
              height: "fitContent",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              margin: "3em",
              borderRadius: "4em",
              padding: "2em",
              border: "none",
              backgroundColor: '#F9F5F2',
              boxShadow: '5px 10px rgba(136, 136, 136, 0.3)'
            }}
          >
            <CardActionArea
              sx={{
                "& .MuiTouchRipple-root": {
                  fontFamily: "Raleway",
                  borderRadius: "4em 4em 0 0",
                  backgroundColor: "transparent",
                  backfaceVisibility: "hidden",
                },

                "& .MuiCardActionArea-focusHighlight": {
                  borderRadius: "4em 4em 0 0",
                  color: "#fff",
                  backgroundColor: "transparent",
                },

                "&.MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img": {
                  borderRadius: '14em',
                }
              }}
            >
              {/* {show && (
                <div className="technologies_used" >
                  Technologies used: <hr />
                  {projects.technologies}
                </div>
              )} */}
              <CardMedia
                component="img"
                height="160"
                image={projects.image}
                alt="projects"
                textalign="center"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="cards_title"
                  fontSize="1.8rem"
                  fontFamily="Raleway"
                >
                  {projects.name}
                  <div className="tech_hide">
                    <h6>
                      Technologies used:
                      {/* <hr /> */}
                    </h6>
                    {projects.technologies}
                  </div>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="cards_text"
                  fontSize="0.9rem"
                  sx={{
                    fontFamily: "Raleway",
                    color: "#000",
                  }}
                >
                  {projects.description}
                </Typography>
                <hr className="project_hr" />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <button
                className="visit_button"
                style={{ display: projects.link ? "block" : "none" }}
              >
                <a
                  href={projects.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  VISIT
                </a>
              </button>
              <button
                className="visit_button"
                style={{ display: projects.github ? "block" : "none" }}
              >
                <a
                  href={projects.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  REPO
                </a>
              </button>
            </CardActions>
          </Card>
        ))}
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
