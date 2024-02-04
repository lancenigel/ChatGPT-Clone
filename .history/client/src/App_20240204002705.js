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
        <div className="chat-input-holder">
          <textarea className="chat-input-textarea"></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
