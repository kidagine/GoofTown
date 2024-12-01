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
          <Showcase />
          <Showcase />
          <Showcase />
        </div>

        <div className="BottomRow">

        </div>
      </div>
    </div>
  );
}

export default App;
