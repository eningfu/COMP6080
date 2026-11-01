import React from 'react';
import './App.css';

function App() {
  const message = "setting names";
  const [name, setName] = React.useState("");
  const [allNames, setAllNames] = React.useState<string[]>([]);

  const submitInfo = () => {
    if (name !== "") {
      setAllNames([ ... allNames, name ]);
    }
  };

  return (
    <div>
      <div className="header">
        <div id="nav-bar">
          <div className="nav-item">Home</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Pricing</div>
          <div className="nav-item">Partners</div>
          <div className="nav-item">Contact</div>
        </div>
      </div>
      <div className="main">
        First name: <input type="text" name="first-name" value={name} onChange={e => setName(e.target.value)} /><br />
        {allNames.map((n, idx) => (
          <div style={{ width: '50px', height: '50px', display: 'inline-block'}}>{n}</div>
        ))}
        <div id="form-submit" onClick={submitInfo}>Submit</div>
      </div>
      <div className="footer">
        &copy; Giant Apple 2020
      </div>
    </div>
  );
}

export default App;
