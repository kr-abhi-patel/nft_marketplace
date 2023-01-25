import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import {useEffect, useState} from 'react';
import Cards from './components/Cards';
import Button from './components/Button';
import MenuContainer from './components/MenuContainer';

function App() {
  const [buttonText,setButtonText] = useState('Open Window')
  const [showMenu,setshowMenu] = useState(false)

  const ChangeText = () => {
    buttonText === 'Open Window' ? setButtonText('Close Window') : setButtonText('Open Window');
    buttonText === 'Open Window' ? setshowMenu(true) : setshowMenu(false);
    
  }


  return (
    <div className="App">
   
      
      <Button onClick={ChangeText} buttonText={buttonText}/> 
      <Search/>
      <div className='site-body'>
      {showMenu && <MenuContainer/>}
      <Cards/>
      </div>
     
    </div>
  );
}

export default App;
