import React from 'react';
import './ListingDetail.css';

class ListingDetail extends React.Component(){
    constructor(props) {
        super(props);
        //this.handleClick = this.handleClick.bind(this);
      } 
    render() {
        return (
        <div className="detail-container">
            <h1>props.name</h1>
            
        </div>
    )};

}

export default ListingDetail;
