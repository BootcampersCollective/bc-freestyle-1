import React from 'react';
import './ListingDetail.css';
import { fetchListing } from '../actions/listingsActions.js';

const ListingDetail = props => {

    fetchListing();

    let postDateEpoch = "1475028136";
    let postDate = `${(new Date(postDateEpoch*1000)).toLocaleDateString()}`;
    let name = "Flovent HFA";
    let desc = "tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum.";
    let img = "http://wwwimage1.cbsstatic.com/thumbnails/videos/w848/CBS_Production_Entertainment_VMS/2017/09/28/1056668739786/CBS_COLBERT_0414_CLIP7_IMAGE_1222700_640x360.jpg";
    let qty = 20;
    let categories = "seafood";
    let location = "66.89462, -108.10672";
    let pickUpDateEpoch = "1475500243";
    let pickUpDate = `${(new Date(pickUpDateEpoch*1000)).toLocaleDateString()}`;
    let haves = false;
    let available = "23:00";
    let email = "nec.enim.Nunc@ultricies.org";


    return(
        <div className="detail-container"> 
            <header>             
                <h1>{name}</h1>
                <h2>Posted: {postDate}</h2>
            </header>
            <div className="description">
                <img alt="item preview" className="summaryImg" src={img}/>
                <h3>{desc}</h3>
            </div>
            <div className="description">
                <h3>Categories: {categories}</h3>
                <h3>Quantity: {qty}</h3>
            </div>
            <div className="description">
                <h3>Location: {location}</h3>
                <h3>Contact: {email}</h3>
            </div>
            <div className="description">
                <h3>Pick Up Date: {pickUpDate}</h3>
                <h3>Time Available: {available}</h3>
            </div>
        </div>
    )
}
  
  export default ListingDetail;
