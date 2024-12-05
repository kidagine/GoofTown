import './App.css';
import Showcase from './Showcase.js';

function App() {

  return (
    <div className="MainContainer">
      <div className="ContentContainer">

        <div className="TopRow">
          <p className="Title">GOOFTOWN INC.</p>
        </div>

        <div className="MiddleRow">
          <Showcase title={"Public Assets"} />
          <Showcase title={"Games"} />
          <Showcase title={"Contract Work"} />
        </div>

        <div className="BottomRow">
          {/* <div className="Button">Discord</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
