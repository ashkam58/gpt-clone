import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import rocket from './assets/home.svg'
import home from './assets/rocket.svg'
import saved from './assets/bookmark.svg'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="brand">AshGPT</span>
          </div>
          <button className="midbtn">
            <img src={addBtn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is programming
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use an API
            </button>
          </div>
        </div>
        <div className="lowerside">
          <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="" className="listItemsImg" />Upgrade to Pro</div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;