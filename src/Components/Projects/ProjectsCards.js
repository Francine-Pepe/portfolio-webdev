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

export default function ProjectsCards(props) {

  const projects = [
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
        <ProjectTitle title="PROJECTS" /> 
        <h1> {props.title} </h1>
        {/* <div className="opacity_projects"> */}
        {projects.map((projects, id, item) => (
          <Card
            sx={{
              width: "22em",
              height: 'fitContent',
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              margin: "3em",
              borderRadius: '4em',
              padding: "2em",
              border: "none",
            }}
          >
            <CardActionArea
            sx={{
              "& .MuiTouchRipple-root": {
                fontFamily: 'Roboto Slab',
                borderRadius: '4em 4em 0 0',
                backgroundColor: 'transparent'
                },

                "& .MuiCardActionArea-focusHighlight": {
                  borderRadius: '4em 4em 0 0',
                  
                  }
            }}
            >
              <CardMedia
                component="img"
                height="160"
                image={projects.image}
                alt="projects"
                textAlign="center"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div"
                className="cards_title"
                fontSize="1.8rem"
                fontFamily="Roboto Slab"
                
                >
                  {projects.name}
                </Typography>
                <Typography variant="body2" color="text.secondary"
                className="cards_text"
                fontSize="0.9rem"
                sx={{
                  fontFamily: "Roboto Slab",
                  color: '#000',
                  
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
    </>
  );
}
