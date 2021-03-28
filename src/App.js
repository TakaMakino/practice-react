import React from "react";

// function App() {
//   return(
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={()=> console.log("I am clicked!!")}/>
//     </React.Fragment>
//   )
// }

const App = ()=>{
  return(
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}

let Cat = () =>{
  return (
    <div>Meow!</div>
  )
}

export default App;
