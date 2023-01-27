const Card = ({CardCollection}) =>{
    return(
     <>
     {
        CardCollection.map((card)=>
            <>
            <div className="card">
                <div className="image-container">
                <img src={card.image}/>
                <p className="small-name">
                    {
                        card.small_name
                    }
                </p>
            <p className="name">{card.name}</p>
            <div className="price-box">
                <div className="price">
                    <div className="price-heading">
                        Price
                    </div>
                    <div className="price-amount">
                         {card.price}
                    </div>
                </div>
                <div className="highest-bid">
                    <div className="bid-heading">
                      Highest Bid
                    </div>
                    <div className="bid-amount">
                      {card.highest}
                    </div>
                </div>
            </div>
            {/* <p>Price : {card.price}</p> */}
                </div>
           
            </div>
          
            </>
        )
     }
     </>
    )
}
export default Card;