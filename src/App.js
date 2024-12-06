import './App.css';
import Showcase from './Showcase.js';
import Kiddo from './images/Kiddo.png'

function App() {
  const openDiscord = (url) => {
    window.open('https://discord.gg/wPw9fV6aQg')
  };
  const openEmail = (url) => {
    window.open('mailto:gooftowninc@gmail.com?subject=Subject&body=Body%20goes%20here')
  };
  const openGithub = (url) => {
    window.open('https://github.com/kidagine')
  };
  const publicAssets = [
    {
      title: "Public Assets",
      image: "RetroTopDownTemplate",
    },
    {
      title: "Public Assets",
      image: "TEST",
    },
  ];
  const games = [
    {
      title: "Public Assets",
      image: "RetroTopDownTemplate",
    }
  ];
  const contractWork = [
    {
      title: "Public Assets",
      image: "RetroTopDownTemplate",
    },
    {
      title: "Public Assets",
      image: "TEST",
    },
  ];

  return (
    <div className="MainContainer">
      <div className="ContentContainer">

        <div className="TopRow">
          <p className="Title">GOOFTOWN INC.</p>
        </div>

        <div className="MiddleRow">
          <Showcase title={"Public Assets"} data={publicAssets} />
          <Showcase title={"Games"} data={games} />
          <Showcase title={"Contract Work"} data={contractWork} />
        </div>

        <div className="BottomRow">
          <div className="MediaContainer">
            <p>For quick and open discussions:</p>
            <button className="DiscordButton" onClick={openDiscord}>Discord</button>
          </div>
          <div className="ContactContainer">
            <p>If you want to discuss further then you can<br />click right here:</p>
            <button className="ContactButton" onClick={openEmail}>Contact</button>
          </div>
          <div className="InformationContainer" onClick={openGithub}>
            <img
              className="KiddoLogoImg"
              src={Kiddo}
              frameborder="0" allowfullscreen>
            </img>
            <p>More to come...</p>
          </div>
        </div>
      </div>
    </div>
  );


}

export default App;
