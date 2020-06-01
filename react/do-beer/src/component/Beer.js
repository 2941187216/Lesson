import React from "react";
import { Link } from "react-router-dom";


class Beer extends React.Component {
  static propTypes = {
      details: this.PropTypes.object.isRequired
  }
  render() {
    const { name, labels, id } = this.props.details;
    const image = labels?labels.medium: 'null.jpg'
    return (
      <div className="beer">
        <Link to={`/beer/${id}/${name}`}>
          <h2>{name}</h2>
          {/* <img src={} alt=""/> */}
          <img src={image} alt=""/>
        </Link>
      </div>
    )
  }
}


export default Beer;