import React, { Component } from 'react';
import './App.css';
import Fury from './Person/Person';
//import Radium, {StyleRoot} from 'radium';
//import './Person/Person.css'






class App extends Component {
  state = {
    persons: [
      {id: '2', name: 'Talha ', age: '22'},
      {id: '1', name: 'Hamza', age:'48'}
    ],
    otherstate: 'Some Other Value',
    showPersons: false
  }
  
  
 
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    ////index lene ha jis ki id le ha argument k zreye sy
    const person = {
      ...this.state.persons[personIndex]};

////index jis ka leya ha us ka name 
    person.name= event.target.value;
    const updatedpersons = [...this.state.persons];
    updatedpersons[personIndex] = person;


    
    // persons ki jga updated dal do manual ko delete kr deya ha
    
      this.setState({
      persons: updatedpersons });   
  }
  deletePersonHandler = (personIndex) =>{
  //  const newpersons = this.state.persons.slice();
    const newpersons = [...this.state.persons];
    newpersons.splice(personIndex, 1);
    this.setState({persons: newpersons}); 
  }
    toggleFuryHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
    render (){
      const design = {
        backgroundColor: 'Green',
        color: 'White',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        //':hover':{
        //  backgroundColor: 'Cyan',
        //  color:'Black'
        }
      }

      let persons = null;
      if(this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person, index) =>{
              return <Fury 
                        fname = {() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id} 
                        change={(event) => this.nameChangeHandler(event, person.id)}
                        />
            })}
          </div>
        );
        design.backgroundColor = 'Red';
        //design[':hover'] = {
         // backgroundColor: 'Blue',
         // color: 'Black'
        //};
      }

      const cssClasses = []
      if ( this.state.persons.length === 2){
        cssClasses.push('red');
      }
      if(this.state.persons.length === 1){
        cssClasses.push('bold', 'red');
      }


      return (
       // <StyleRoot>
        <div className="App">
          <h1>I AM HUZAIFA HERE </h1>
          <p className={cssClasses.join(' ')}>This Is really Working</p>
          <button style={design}
          //onClick={() => this.switchbuttonHandler('Raja Talha')}>Switch Button</button>
          onClick={this.toggleFuryHandler}>Toggle Button</button>
          {persons}
        </div>
       // </StyleRoot>
      );
    }
  }




export default App;
  //////////////function///////////
//const NewApp = props =>{ 
  //const [personsState, setPersonsState] = useState({
    //persons: [
      //{name: 'Talha', age: '22'},
      //{name: 'Hamza', age:'48'}
    //]
  //});
  //const [otherState, setOtherStatee] = useState('Some Other Value');
  //console.log(personsState, otherState);
  //const switchbuttonHandler = () => {
    // console.log('Worked');
    // Dont do this: this.state.persons[0].name = 'Talha Asif';
    //setPersonsState({persons: [
      //{name: 'Talha Asif', age: '22'},
      //{name: 'Hamza', age:'18'}
      //],
      //otherstate: personsState.otherstate
    //});
  //};
  ////////////////////////////////////////////////////Use personsState instead of this.state//////////////////
  //{
    //after button
    // put curly braces from start to null word null
    //this.state.showPersons ? 
 //  <div>
   //<Fury 
    // name= {this.state.persons[0].name} 
    // age= {this.state.persons[0].age}
    // fname={this.switchbuttonHandler.bind(this, 'Talha Asif')} > Asif is Correct.</Fury>
   //<Fury 
    // name={this.state.persons[1].name}
    // change = {this.nameChangeHandler}
    // age= {this.state.persons[1].age}></Fury>
  // </div> 
   //: null
  // }
   //////////////////

  // <Fury 
           // name= {this.state.persons[0].name} 
           // age= {this.state.persons[0].age}
           // fname={this.switchbuttonHandler.bind(this, 'Talha Asif')} > Asif is Correct.</Fury>
         // <Fury 
           // name={this.state.persons[1].name}
           // change = {this.nameChangeHandler}
            //age= {this.state.persons[1].age}></Fury>



            /////////////////////////////
    //        switchbuttonHandler = (newName) => {
      //        // console.log('Worked');
        //       //Dont do this: this.state.persons[0].name = 'Talha Asif';
           //   this.setState({
          //      persons: [
            //    {name: newName, age: '22'},
            //    {name: 'Hamza', age:'18'}
             //   ] });
         //   }
            ////////////////