import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import { useState } from 'react';

function App() {

    const [userInput,setUserInput]=useState({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
    });

    function handleChange(inputIdentifier, newValue) {
      setUserInput((prevUserInput) => {
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue
          };
      });
    }


  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    <Results input={userInput}/>
    </>
  );
}

export default App;
