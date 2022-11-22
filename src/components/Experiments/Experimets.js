import "./Experiments.css";

const Experimets = () => {
  return (
    <div id="experimentsContainer">
      <p className="experimentsSubtitle">Experimentation & side projects</p>
      <h1>Experiments</h1>
      <div className="experimentsProjectsContainer">
        <div className="experimentsProjectWrapper">
          <div className="experimentsProject"></div>
          <div className="experimentsProjectAnimation">
            <div className="ePAContent">
              <h1>Films website</h1>
              <p>description about the project etcetc...</p>
            </div>
          </div>
        </div>
        <div className="experimentsProjectWrapper">
          <div className="experimentsProject"></div>
          <div className="experimentsProjectAnimation">
            <div className="ePAContent">
              <h1>Workout-Logs</h1>
              <p>description about the project etcetc...</p>
            </div>
          </div>
        </div>
        <div className="experimentsProjectWrapper">
          <div className="experimentsProject"></div>
          <div className="experimentsProjectAnimation">
            <div className="ePAContent">
              <h1>Interesting thing</h1>
              <p>description about the project etcetc...</p>
            </div>
          </div>
        </div>
        <div className="experimentsProjectWrapper">
          <div className="experimentsProject"></div>
          <div className="experimentsProjectAnimation">
            <div className="ePAContent">
              <h1>something else</h1>
              <p>description about the project etcetc...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experimets;
