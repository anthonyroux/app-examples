import * as React from "react";
import ReactDOM from "react-dom";
import { Read, Write } from "./components";

function App() {
  const [selectedTab, setSelectedTab] = React.useState("translate-read");

  const handleSelectTab = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="grid wrapper">
      <div className="cs1 ce12">
        <div className="tabs">
          <div className="tabs-header-list">
            <div
              tabIndex={0}
              className={`tab ${selectedTab === "translate-read" && "tab-active"}`}
              onClick={() => handleSelectTab("translate-read")}
            >
              <div className="tab-text tab-badge">Translate from the board</div>
            </div>
            <div
              tabIndex={0}
              className={`tab ${selectedTab === "translate-write" && "tab-active"}`}
              onClick={() => handleSelectTab("translate-write")}
            >
              <div className="tab-text tab-badge">Create sticky notes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs1 ce12">
        {selectedTab === "translate-read" ? <Read /> : <Write />}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// insurance: 0205745717
//   + 31 - 020 574 5715
