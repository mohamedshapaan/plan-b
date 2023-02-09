import { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
   render(){
    return (
        <>
            <img src={this.props.photo} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{this.props.name}</h5>
                <p class="card-text">{this.props.totalHouers} hours</p>
                <Link to={"/DetailsPage/"+this.props.id} class="btn btn-primary">{this.props.price} $</Link>
            </div>
        </>
          )
   }
  }
  
  export default Card;
  