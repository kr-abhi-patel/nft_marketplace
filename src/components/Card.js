const Card = ({CardCollection}) =>{
    return(
     <>
     {
        CardCollection.map((card)=>
            <>
            <div className="card">
            <img src={card.image}/>
            <p>Name : {card.name}</p>
            <p>Price : {card.price}</p>
            </div>
          
            </>
        )
     }
     </>
    )
}
export default Card;