const Button = ({buttonText,onClick}) =>{
   
    
 return(
    <>
     <button onClick={onClick} className="btn menu-btn">
        {buttonText}
        </button>
    </>
 )
}

export default Button;