import React, { Component } from 'react';
import './NewListing.css';

class NewListing extends Component {
	constructor(props) {
		super(props);
		
	}

	handleSubmit(e){
		e.preventDefault();
		console.log('submitted');
		/* TODO: POST new listing */
	}

	render() {
		return (
		<div className="newListingForm">
			<form>
				<input type="text" name="name" placeholder="Listing Title" required />
				<label for="desc">Description:</label>
				<textarea id="desc" name="desc"></textarea>

				<input onSubmit={this.handleSubmit.bind(this)} type="submit" value="submit" />
			</form>
		</div>
		)
	}
}

export default NewListing;

/*
{
  		"id": "ADF39C43-CDDF-9353-6FC2-0FAE5E36BDBC",
  		"email": "nec.enim.Nunc@ultricies.org",
  		"user": {},
  		"name": "Flovent HFA",
  		"postDate": "1475028136",
  		"categories": "seafood",
  		"desc": "tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum.",
  		"qty": 20,
  		"location": "66.89462, -108.10672",
  		"img": "http://wwwimage1.cbsstatic.com/thumbnails/videos/w848/CBS_Production_Entertainment_VMS/2017/09/28/1056668739786/CBS_COLBERT_0414_CLIP7_IMAGE_1222700_640x360.jpg",
  		"pickUpDate": "1475500243",
  		"haves": false,
  		"available": "23:00"
  	}
  	*/