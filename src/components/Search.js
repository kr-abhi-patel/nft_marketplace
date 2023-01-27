import {useState} from 'react';
import Card from './Card';
import CardCollection from './Collection';
import MenuContainer from './MenuContainer';

const getFilteredItem = (query,items) =>{

    if(!query)
    {
        return items;
    }
    return items.filter(element => element.name.includes(query))

}
const Search = () =>{
 
    const [query,setquery] = useState("");
    const tracks = CardCollection;
    const items = tracks;
    const filteredItems = getFilteredItem(query,items)

    const [buttonText,setButtonText] = useState('Open Window')
    const [showMenu,setshowMenu] = useState(false)
  
    const ChangeText = () => {
      buttonText === 'Open Window' ? setButtonText('Close Window') : setButtonText('Open Window');
      buttonText === 'Open Window' ? setshowMenu(true) : setshowMenu(false);
      
    }
    return(
        <>
        <input type="text" className="Search" placeholder="Search By NFTs" onChange={(e)=>setquery(e.target.value)}/>
      
        <div className="card-collection site-body">
            {showMenu && <MenuContainer/>}
            <Card CardCollection={filteredItems}/>
        </div>

      

       
        </>
    )

}
export default Search;