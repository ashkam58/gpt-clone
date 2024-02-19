import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import rocket from "./assets/home.svg";
import home from "./assets/rocket.svg";
import saved from "./assets/bookmark.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="brand">ashGPT</span>
          </div>
          <button className="midBtn">
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
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat bot">
            <img className='chatImg' src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              consequuntur qui modi ratione, rem quidem ipsum. Nihil accusantium
              rem nostrum eos? Obcaecati, at.
            </p>
            
          </div>
              <div className="chat bot"><img className='chatImg' src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nostrum praesentium possimus minima hic optio rerum commodi iusto veritatis quod, dolor ipsam sequi aperiam alias est. Vero cumque magni laborum asperiores ullam quisquam placeat ratione repudiandae quaerat, enim ex impedit iste expedita debitis quasi ad rerum modi quae aliquid necessitatibus eligendi cum dolore repellendus dignissimos. Nesciunt omnis perspiciatis dignissimos cum laboriosam sed a minus sapiente veniam dolorum? Et, incidunt! Magni perferendis ad autem. Tenetur, et eius. Soluta voluptates harum laborum architecto eos inventore ipsum atque adipisci esse aliquam sint exercitationem vero ducimus perspiciatis dolorem quis nulla illum, quasi repudiandae mollitia?
            </p></div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message..." />{" "}
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>Chat GPT may produce some of the incorrect results and the knowledge base is upto 2023</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
