import React, { Component } from "react";

class FoodItem extends Component {
  render() {
    let { image, title, price, description } = this.props;
    return (
      <div>
        <div className="single-food">
          <div className="img">
            <img src={image} />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">{description}</div>
        </div>
      </div>
    );
  }
}

export default FoodItem;
