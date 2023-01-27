
import Card from "./Card"; 
import Collection from'./Collection';
const Cards = () => {

    // const CardCollection = [
    //       {
    //         image : 'https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9jYXJkLmdvZHN1bmNoYWluZWQuY29tLz9pZD0xMTAxJnE9NA==',
    //         name : 'Khuga Pre-reveal',
    //         price : 'Not for Sale',
    //         small_name : 'DigiDalgaku Maskes Villains',
    //         highest : 'No Bids Yet'
    //       },
    //       {
    //         image : 'https://ipfs.io/ipfs/bafkreiaou5l7ccq7zwfgvxo2qaa27gleqpvkkgpotiz3h7evxexwgs3eci',
    //         name : 'Khuga Pre-reveal',
    //         price : 'Not for Sale',
    //         small_name : 'DigiDalgaku Maskes Villains',
    //         highest : 'No Bids Yet'
    //       },
    //       {
    //         image : 'https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1lMnJOdlF0ZGF0ZktMTEdUWEhGY1c4Q0ZMRDRiUmpraEZ4RExjN0FCVDZmNQ==',
    //         name : 'Khuga Pre-reveal',
    //         price : 'Not for Sale',
    //         small_name : 'DigiDalgaku Maskes Villains',
    //         highest : 'No Bids Yet'
    //       },
    //       {
    //         image : 'https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1lMnJOdlF0ZGF0ZktMTEdUWEhGY1c4Q0ZMRDRiUmpraEZ4RExjN0FCVDZmNQ==',
    //         name : 'Khuga Pre-reveal',
    //         price : 'Not for Sale',
    //         small_name : 'DigiDalgaku Maskes Villains',
    //         highest : 'No Bids Yet'
    //       },
    //       {
    //         image : 'https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1lMnJOdlF0ZGF0ZktMTEdUWEhGY1c4Q0ZMRDRiUmpraEZ4RExjN0FCVDZmNQ==',
    //         name : 'Khuga Pre-reveal',
    //         price : 'Not for Sale',
    //         small_name : 'DigiDalgaku Maskes Villains',
    //         highest : 'No Bids Yet'
    //       },
    //       {
    //         image : 'https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1lMnJOdlF0ZGF0ZktMTEdUWEhGY1c4Q0ZMRDRiUmpraEZ4RExjN0FCVDZmNQ==',
    //         name : 'Khuga Pre-reveal',
    //         price : 'Not For Sale',
    //         small_name : 'DigiDalgaku Maskes Villains',
    //         highest : 'No Bids Yet'
    //       },
    //       {
    //         image : 'https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1lMnJOdlF0ZGF0ZktMTEdUWEhGY1c4Q0ZMRDRiUmpraEZ4RExjN0FCVDZmNQ==',
    //         name : 'Khuga Pre-reveal',
    //         price : 'Not for Sale',
    //         small_name : 'DigiDalgaku Maskes Villains',
    //         highest : 'No Bids Yet'
    //       },
    //       {
    //         image : 'https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1lMnJOdlF0ZGF0ZktMTEdUWEhGY1c4Q0ZMRDRiUmpraEZ4RExjN0FCVDZmNQ==',
    //         name : 'Khuga Pre-reveal',
    //         price : 'Not for Sale',
    //         small_name : 'DigiDalgaku Maskes Villains',
    //         highest : 'No Bids Yet'
    //       },
    //       {
    //         image : 'https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1lMnJOdlF0ZGF0ZktMTEdUWEhGY1c4Q0ZMRDRiUmpraEZ4RExjN0FCVDZmNQ==',
    //         name : 'Khuga Pre-reveal',
    //         price : 'Not for Sale',
    //         small_name : 'DigiDalgaku Maskes Villains',
    //         highest : 'No Bids Yet'
    //       },
    //       {
    //         image : 'https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1lMnJOdlF0ZGF0ZktMTEdUWEhGY1c4Q0ZMRDRiUmpraEZ4RExjN0FCVDZmNQ==',
    //         name : 'Khuga Pre-reveal',
    //         price : '0.017ETH',
    //         small_name : 'DigiDalgaku Maskes Villains',
    //         highest : 'No Bids Yet'
    //       },
    //       {
    //         image : 'https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1lMnJOdlF0ZGF0ZktMTEdUWEhGY1c4Q0ZMRDRiUmpraEZ4RExjN0FCVDZmNQ==',
    //         name : 'Khuga Pre-reveal',
    //         price : '0.017ETH',
    //         small_name : 'DigiDalgaku Maskes Villains',
    //         highest : 'No Bids Yet'
    //       },

    //     ]
        // {
        

        // },

    
    return(
        <div className="card-collection">
            {/* <Card CardCollection={Collection}/> */}
        </div>
    )
}

export default Cards;