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
              <h1>Comming soon</h1>
              {/* <p>description about the project etcetc...</p> */}
            </div>
          </div>
        </div>
        <div className="experimentsProjectWrapper">
          <div
            className="experimentsProject"
            style={
              {
                // backgroundImage: `url("/experiments/gymBackground.jpg")`,
              }
            }
          ></div>
          <div className="experimentsProjectAnimation">
            <div className="ePAContent">
              <h1>Comming soon</h1>
              {/* <p>description about the project etcetc...</p> */}
            </div>
          </div>
        </div>
        <div className="experimentsProjectWrapper">
          <div
            className="experimentsProject"
            style={
              {
                // backgroundImage: `url("/experiments/sushi.jpg")`,
              }
            }
          ></div>
          <div className="experimentsProjectAnimation">
            <div className="ePAContent">
              <h1>Comming soon</h1>
              {/* <p>description about the project etcetc...</p> */}
            </div>
          </div>
        </div>
        <div className="experimentsProjectWrapper">
          <div className="experimentsProject"></div>
          <div className="experimentsProjectAnimation">
            <div className="ePAContent">
              <h1>Comming soon</h1>
              {/* <p>description about the project etcetc...</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experimets;
