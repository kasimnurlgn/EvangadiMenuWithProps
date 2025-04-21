import React from "react";
import "./assets/style.css";
import Header from "./components/Header/Header";
import menu from "./assets/data";
import FoodItem from "./components/FoodItem/FoodItem";
function App() {
  return (
    <div className="all-container">
      <Header />
      {/* <div className="foods-container">
        {menu.map((item) => {
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
      </div> */}
    </div>
  );
}

export default App;

