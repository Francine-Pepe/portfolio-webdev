import { Paper, Box } from "@mui/material";
import "./Skills.css";
import { Icon } from "@iconify/react";
import ProjectTitle from "../Projects/ProjectTitle";

export default function Skills(props, index) {
  return (
    <>
      <div className="skills_container" id="skills">
        {/* <div className="opacity_container" > */}
        <ProjectTitle title="SKILLS" key={index} />
        <h1> {props.title}</h1>
        <Box
          className="box_container"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            "& > :not(style)": {
              m: 1,
              width: "25em",
              height: "32em",
              padding: "1em",
              margin: "2em",
              borderRadius: "4em",
            },
          }}
        >
          <Paper elevation={3}>
            <div className="skills_title">
              <h2>Frontend Development</h2>
            </div>
            <hr />

            <div className="skills">
              <div className="icon_container">
                <Icon
                  icon="logos:html-5"
                  width="60"
                  height="60"
                  className="icon"
                />
                <div className="hide">HTML 5</div>
              </div>
              <div className="icon_container">
                <Icon
                  icon="logos:css-3"
                  width="60"
                  height="60"
                  className="icon"
                />
                <div className="hide">CSS 3</div>
              </div>
              <div className="icon_container">
                <Icon
                  icon="logos:javascript"
                  width="60"
                  height="60"
                  className="icon"
                />
                <div className="hide">JavaScript</div>
              </div>
              <div className="icon_container">
                <Icon
                  icon="logos:react"
                  width="60"
                  height="60"
                  className="icon"
                />
                <div className="hide">React JS</div>
              </div>
              <div className="icon_container">
                <Icon icon="logos:vue" width="60" height="60" />
                <div className="hide">Vue.js</div>
              </div>
              <div className="icon_container">
                <Icon
                  icon="logos:bootstrap"
                  width="60"
                  height="60"
                  className="icon"
                />
                <div className="hide">Bootstrap</div>
              </div>
              <div className="icon_container">
                <Icon
                  icon="logos:material-ui"
                  width="60"
                  height="60"
                  className="icon"
                />
                <div className="hide">Material UI</div>
              </div>
            </div>
          </Paper>

          <Paper elevation={3}>
            <div className="skills_title">
              <h2>Wireframe, Design and Agile</h2>
            </div>
            <hr />
            <div className="skills">
              <div className="icon_container">
                <Icon
                  icon="cib:adobe-xd"
                  color="#470137"
                  width="55"
                  height="55"
                  className="icon"
                />
                <div className="hide">Adobe XD</div>
              </div>
              <div className="icon_container">
                <Icon
                  icon="vscode-icons:file-type-photoshop"
                  width="60"
                  height="60"
                  className="icon"
                />
                <div className="hide">Photoshop</div>
              </div>
              <div className="icon_container">
                <Icon
                  icon="logos:trello"
                  width="60"
                  height="60"
                  className="icon"
                />
                <div className="hide">Trello</div>
              </div>
              <div className="icon_container">
                <Icon icon="mdi:responsive" width="60" height="60" />
                <div className="hide">Responsive Design</div>
              </div>
            </div>
          </Paper>
          <Paper elevation={3}>
            <div className="skills_title">
              <h2>Development Tools and Architecture</h2>
            </div>
            <hr />
            <div className="skills">
              <div className="icon_container">
                <Icon
                  icon="logos:github-octocat"
                  width="60"
                  height="60"
                  className="icon"
                />
                <div className="hide">Github</div>
              </div>
              <div className="icon_container">
                <Icon
                  icon="dashicons:rest-api"
                  width="60"
                  height="60"
                  className="icon"
                />
                <div className="hide">RestAPI</div>
              </div>
            </div>
          </Paper>
        </Box>
      </div>
      {/* </div> */}
    </>
  );
}
