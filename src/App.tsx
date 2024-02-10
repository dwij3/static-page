// libs
import { ReactElement } from 'react';
import './App.css';

// components
import { Header } from './components/header'; 
import { Body } from './components/body';
import { Footer } from './components/footer'; 

export const  App = ():ReactElement => {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Body/>
      </div>
     
     <Footer />
    </div>
  );
}

export default App;
