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
      description: "A free easy to play fighting game with custom rollback netcode, featuring multiple characters/stages with all of the standard fighting game features.",
      video: "https://www.youtube.com/embed/ouh34A0fY4k?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "https://lh3.googleusercontent.com/d/1HXQU0vQEZ26vUBAH1c19xNetevG39OxA=s500?authuser=0",
      url: "https://gamejolt.com/games/darklings/640842"
    }
  ];
  const contractWork = [
    {
      title: "FreeJack Online",
      description: "FreeJack Online is a big F2P racing game with parkour elements and online play. Worked on level design, core game mechanics, multiplayer functionality and UI.",
      video: "https://www.youtube.com/embed/RNU7E6ziloI?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "https://lh3.googleusercontent.com/d/1PXPTfZ0EuELCx3MOu8LAf8NWJpw32Ylu=s500?authuser=0",
      url: "https://store.steampowered.com/app/2629170/FreeJack_Online/"
    },
    {
      title: "Oniri",
      description: "A photorealistic metaverse for e commerce and collaboration with customers and clients. Integrated the desktop port, as well as the UI visuals and functionality and real time cloud asset streaming.",
      video: "https://www.youtube.com/embed/rQFbL75l7dk?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "https://lh3.googleusercontent.com/d/1Wzp6edYBJkEIUDLhJ4L4TVXQ_l27vumf=s500?authuser=0",
      url: "https://www.youtube.com/watch?v=rQFbL75l7dk"
    },
    {
      title: "Scrum Noire",
      description: "An immversive play experience to teach companies the properties and methods of the Scrum Methodology through interactive means.",
      video: "https://www.youtube.com/embed/12Zkbt5zNKA?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "https://lh3.googleusercontent.com/d/1vhlQJRjXtxKyk2CFkZgcN30GW3wpVCCI=s500?authuser=0",
      url: "https://amper.dk"
    },
    {
      title: "Amper App",
      description: "App and Website with account management, allowing users to view cards that are loaded dynamically based on the account, each card teaches the user a new methodology for handling a company.",
      video: "https://www.youtube.com/embed/3k3EDoz13SY?enablejsapi=1&version=3&playerapiid=ytplayer",
      image: "https://lh3.googleusercontent.com/d/17RkmsGTE73Is27JD0M-kBxJefUtXxqYK=s500?authuser=0",
      url: "https://amper.dk"
    },

  ];

  return (
    <div className="MainContainer">
      <div className="ContentContainer">

        <div className="TopRow">
          <p className="Title">GOOFTOWN INC.</p>
          <p className="TitleInfo">Developing assets, tools, apps, games and anything inbetween.</p>
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
