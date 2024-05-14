import React from "react";
import Tablecontainer from "./component/Tablecontainer";
import data from "./data.json";
function App() {
  return (
    <div>
      <Tablecontainer data={data} />
    </div>
  );
}

export default App;
