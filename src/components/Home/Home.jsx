import React, { Component } from "react";
import menu from "../../assets/data";
import FoodItem from "../FoodItem/FoodItem";
class Home extends Component {
  render() {
    return (
      <div className="foods-container">
        {menu?.map((item) => {
          return (
            <FoodItem
              key={item.id}
              image={item.img}
              price={item.price}
              title={item.title}
              description={item.desc}
            />
          );
        })}
      </div>
    );
  }
}

export default Home;
