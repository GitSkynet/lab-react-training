import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard'
import Greetings from './Components/Greetings'
import Random from './Components/Random';

function App() {
  return (
    <div className="App">
      <div className="div-iteration-1">
        <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"/>
      </div>

      <div className="div-iteration-1">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      </div>

      <div className="greetings">
          <Greetings lang="de">Charlits</Greetings>
        </div>
        
        <div className="greetings">
          <Greetings lang="en">Charless</Greetings>
        </div>
        
        <div className="greetings">
          <Greetings lang="es">Carlos</Greetings>
        </div>

        <div className="greetings">
          <Greetings lang="fr">Charles</Greetings>
        </div>
      <div className="random-div">
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div> 
    </div> 
  );
}

export default App;
