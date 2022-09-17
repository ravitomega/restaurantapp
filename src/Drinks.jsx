import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

//object2
let ddt = [
  {
    id: 1,
    title: "Mojito",
    rupee: "Rs. 150",
  },
  {
    id: 1,
    title: "Pinacolada",
    rupee: "Rs 260",
  },
];

import React from "react";

const Drinks = () => {
  return (
    <div>
      <div>
        <h2 style={{ backgroundColor: "red" }}>DRINKS</h2>
        <div
          className="flex"
          style={{ display: "flex", gap: "300px", paddingLeft: "200px" }}
        >
          <h3
            style={{
              backgroundColor: "black",
              color: "white",
              height: "40px",
              padding: "center",
            }}
          >
            Name
          </h3>
          <h3 style={{ backgroundColor: "black", color: "white" }}>Price</h3>
        </div>

        {ddt.map((ele) => {
          return (
            <div
              key={ele.id}
              style={{ display: "flex", gap: "300px", paddingLeft: "200px" }}
              className="flex"
            >
              <h3>{ele.title}</h3>
              <h3>{ele.rupee}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Drinks;
