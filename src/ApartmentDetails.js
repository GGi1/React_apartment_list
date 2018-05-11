import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Apartments from './Store/Apartments';

class ApartmentDetails extends Component{


  constructor(){
    super()
    this.state = {
      all_apartments: Apartments
    }
  }
  componentWillMount(){
    console.log(this.state);
    // get the id:
    const id = this.props.match.params.id
    console.log(this.props);
    //get the apartment info for the ID:
    let apartment = this.state.all_apartments.find(function(listing){
      return listing.id === parseInt(id)
    })
      this.setState({apartmentId: id, apartment_we_clicked: apartment})
      console.log(this.state);
  }



  render(){
    return(
      <div>
      <Link to = '/'>Home</Link>
      <h2>{this.state.apartment_we_clicked.name}</h2>
      <h3>{this.state.apartment_we_clicked.details}</h3>
      <h4>available: {this.state.apartment_we_clicked.rented}</h4>
      </div>
    );
  }
}

export default ApartmentDetails;
