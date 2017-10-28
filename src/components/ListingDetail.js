import React from 'react';
import { connect } from 'react-redux';
import './ListingDetail.css';
import listingsJSON from '../db/data.json';
import { fetchListing } from '../actions/listingsActions.js';

const ListingDetail = props => {

    fetchListing();

    let postDate = "1475028136";
    let postDateString = `${(new Date(postDate*1000)).toLocaleDateString()}`;
    let name = "Flovent HFA";
    let desc = "tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum.";
    let img = "http://wwwimage1.cbsstatic.com/thumbnails/videos/w848/CBS_Production_Entertainment_VMS/2017/09/28/1056668739786/CBS_COLBERT_0414_CLIP7_IMAGE_1222700_640x360.jpg";
    let qty = 20;
    let categories = {categories};
    let location = "66.89462, -108.10672";
    let pickUpDate = "1475500243";
    let haves = false;
    let available = "23:00";
    let email = "nec.enim.Nunc@ultricies.org";


    return(
        <div> 
            <h1>{name}</h1>
            <h2>{postDateString}</h2>
            <h2>{desc}</h2>
            <h2>{img}</h2>
            <h2>{location}</h2>
            <h2>{email}</h2>
            <h2>{pickUpDate}</h2>
            <h2>{haves}</h2>
            <h2>{available}</h2>
        </div>
    )
}
  
  export default ListingDetail;
