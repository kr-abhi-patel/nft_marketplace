import Menu from "./Menu";
import SubMenu from "./SubMenu";
const MenuContainer = () =>{
  
    
    return(
     <>
     {/* <Menu/> */}
     <div className="Menu-container">
     <Menu menu_name="Select Blockchain"/>
        <Menu menu_name="Status"/>
        <Menu menu_name="Price"/>
        <Menu menu_name="Type"/>
        <Menu menu_name="Option"/>
        <Menu menu_name="Collection"/>
        <SubMenu/>
     </div>
     </>
    )
}
export default MenuContainer;