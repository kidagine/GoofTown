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
      description: "RetroTopDown Template is a template for building top down games in the Unity Engine. Includes all the player controls, room systems and general mechanics with some art assets to get started",
      video: "https://www.youtube.com/embed/RNU7E6ziloI?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "https://lh3.googleusercontent.com/d/1Q07pbWQDLyu3z0hCofCX9nF6JQeJeRPU=s500?authuser=0",
      url: "https://gamejolt.com/games/darklings/640842"
    },
  ];
  const games = [
    {
      title: "Darklings",
      description: "A free easy to play fighting game with custom rollback netcode",
      video: "https://www.youtube.com/embed/ouh34A0fY4k?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "https://lh3.googleusercontent.com/d/1HXQU0vQEZ26vUBAH1c19xNetevG39OxA=s500?authuser=0",
      url: "https://gamejolt.com/games/darklings/640842"
    }
  ];
  const contractWork = [
    {
      title: "FreeJack Online",
      description: "RetroTopDownTemplate is a",
      video: "https://www.youtube.com/embed/RNU7E6ziloI?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "https://lh3.googleusercontent.com/d/1PXPTfZ0EuELCx3MOu8LAf8NWJpw32Ylu=s500?authuser=0",
      url: "https://store.steampowered.com/app/2629170/FreeJack_Online/"
    },
    {
      title: "Amper App",
      description: "RetroTopDownTemplate is a",
      video: "https://www.youtube.com/embed/3k3EDoz13SY?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "https://lh3.googleusercontent.com/d/1PXPTfZ0EuELCx3MOu8LAf8NWJpw32Ylu=s500?authuser=0",
      url: "https://amper.dk"
    },
    {
      title: "Scrum Noire",
      description: "RetroTopDownTemplate is a",
      video: "https://www.youtube.com/embed/12Zkbt5zNKA?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "https://lh3.googleusercontent.com/d/1PXPTfZ0EuELCx3MOu8LAf8NWJpw32Ylu=s500?authuser=0",
      url: "https://amper.dk"
    },
    {
      title: "Oniri",
      description: "A photorealistic metaverse for e commerce and collaboration with customers and clients.",
      video: "https://www.youtube.com/embed/rQFbL75l7dk?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "https://lh3.googleusercontent.com/d/1Y_SluOBqnB7herY_Q5mpTJ2I89ebs93G=s500?authuser=0",
      url: "https://www.youtube.com/watch?v=rQFbL75l7dk"
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
            <p>If you want to discuss further then you can<br />directly contact here:</p>
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
