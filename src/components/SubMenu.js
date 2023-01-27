const SubMenu = () => {
    const handleChange = (id) => {
        console.log(id+"Checked");
    }
    return(
        <>
       
        <p>
        <input type="checkbox" onChange={()=>handleChange('1')}/>
            Etherium
        </p>
        <p>
        <input type="checkbox" onChange={handleChange}/>
            Bitcoin
        </p>
        <p>
        <input type="checkbox" onChange={handleChange}/>
            BNB Chain
        </p>
        <p>
        <input type="checkbox" onChange={handleChange}/>
            Polygon
        </p>
        </>
    )
}
export default SubMenu;