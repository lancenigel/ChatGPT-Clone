import logo from "./logo.svg";
import "./App.css";
import "./normalize.css";

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="sidemenu-button">
          <span className="sidemenu-button-span">+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="avatar"></div>
          </div>
        </div>

        <div className="chat-input-holder">
          <textarea
            rows="1"
            className="chat-input-textarea"
            placeholder="Type your message here"
          ></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
