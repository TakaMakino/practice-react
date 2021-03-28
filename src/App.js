import React from "react";

function App() {
  // const greeting = "Hi!!!"
  // const dom = <h1 className="foo">{greeting}</h1>
  const dom = <input type="text" onChange={() => console.log("I am cliked.")} />;
  return dom;
}

export default App;
