import "./ProjectTitle.css";

export default function ProjectTitle(props) {
  const { title } = props;
    return (
    <>

      <div className="project_title_container">
          <div className="typing-demo">
            {title}
          </div>
      </div>
      
    </>
  );
}

