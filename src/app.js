import Header from "./components/header";

import initialEmails from "./data/emails";

import "./styles/app.css";

import { useState } from "react";

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails);

  console.log(initialEmails);

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {emails.map((email) => {
          return (
            <li className="email" key={email.id}>
              <div className="sender">{email.sender}</div>
            </li>
          );
        })}
      </main>
    </div>
  );
}

export default App;
