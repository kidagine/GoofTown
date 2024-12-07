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
      title: "RetroTopDown Template",
      description: "RetroTopDownTemplate is asdadasdasa",
      video: "https://www.youtube.com/embed/RNU7E6ziloI?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "RetroTopDownTemplate",
    },
    {
      title: "Public Assets",
      description: "",
      video: "",
      image: "TEST",
    },
  ];
  const games = [
    {
      title: "To be announced",
      description: "empty",
      video: "",
      image: "InWorks",
      noContent: true,
    }
  ];
  const contractWork = [
    {
      title: "FreeJack Online",
      description: "RetroTopDownTemplate is a",
      video: "https://www.youtube.com/embed/RNU7E6ziloI?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "RetroTopDownTemplate",
      url: "https://store.steampowered.com/app/2629170/FreeJack_Online/"
    },
    {
      title: "Public Assets",
      description: "",
      video: "",
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
