import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Apartments from './Store/Apartments';

class ApartmentsIndex extends Component {
  componentWillMount(){
    this.setState({apartmentlist: Apartments})
  }
  render(){
    let list = this.state.apartmentlist.map(each_apartment => {
      return(
        <h3 key = {each_apartment.id}>
         <Link to={ `/apartments/${each_apartment.id}`}>
          {each_apartment.name}
          </Link>
          </h3>
      )
    })
    return(
      <ul>
        <div>{list}</div>
      </ul>
    )
  }
}

export default ApartmentsIndex;
