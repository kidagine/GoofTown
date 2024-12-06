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
          <div className="MediaContainer">
            <p>For quick and open discussions:</p>
            <button className="DiscordButton">Discord</button>
          </div>
          <div className="ContactContainer">
            <p>If you want to discuss further then you can contact here:</p>
            <button className="ContactButton">Contact</button>
          </div>
          <div className="ContactContainer">
            <p>If you want to discuss further then you can contact here:</p>
            <button className="ContactButton">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
