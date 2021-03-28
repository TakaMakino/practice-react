import React from "react";
import PropTypes from 'prop-types'

const App = ()=>{
  const profiles = [
    {name:"Taro", age:10},
    {name:"Hanako", age:30},
    {name:"Makino",age:20}
  ]
  return(
    <React.Fragment>
      {
        profiles.map((profile,index)=>{
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </React.Fragment>
  )
}

let User = (props) =>{
  return (
    <React.Fragment>
      <div>I am {props.name} and I am {props.age} years old</div>
    </React.Fragment>
  )
}
User.propTypes = {
  name: PropTypes.string,
  age :PropTypes.number
}

export default App;
