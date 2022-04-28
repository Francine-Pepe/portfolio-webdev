import "./ProjectTitle.css";

export default function ProjectTitle(props) {
  const { title } = props;
    return (
    <>

      <div class="project_title_container">
          <div class="typing-demo">
            {title}
          </div>
      </div>
      
    </>
  );
}

