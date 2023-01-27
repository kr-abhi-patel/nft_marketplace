import SubMenu from "./SubMenu";
const Menu = ({menu_name}) =>{

    const Submenu = [
        {
          name : "Bitcoin"
        },
        {
            name : "Etherium"
        }
        ,
        {
            name : "BNB Chain"
        },
        {
            name : "Polygon"
        }
    ]
    return(
        <>
        <div className="menu-name">
            <p>{menu_name}</p>
            <p>></p>
           
            </div>
         
        </>
    )
}
export default Menu;