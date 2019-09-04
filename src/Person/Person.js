import React from 'react';
//import './Person.css';
import Radium from 'radium';

const person = (props) => {


 // const style = {
   // '@media ( min-width: 500px)':{
     // width: '450px'
   // }//style={style}///className k bad es ko dalna ha Person Wale className k bad
  };
    return (
        <div className= 'Person' >
            <p onClick={props.fname } >i am {props.name} and i am {props.age} year old.</p>
            <p>{ props.children }</p>
            <input type='text' onChange= {props.change} value={props.name}  />
        </div>
    

    )
};



export default person;


//return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hello i am here'));
//function App() {
  //return (
    //<div className="App">
     // <h1>I AM HUZAIFA HERE </h1>
      //<p>This Is really Working</p>
    //</div>
 // );
  //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hello i am here'));
//}
