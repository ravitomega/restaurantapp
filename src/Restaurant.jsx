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

const Restaurant = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios({
      url: "http://localhost:8080/softdrinks",

      method: "get",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <div style={{ backgroundColor: " rgb(120, 120, 168)", height: "auto" }}>
      <h1 style={{ backgroundColor: "red", marginTop: "0" }}>
        Balraj's Kitchen
      </h1>
      <div>
        <h2 style={{ backgroundColor: "red" }}>MAIN COURSE</h2>
        <div className="flex" style={{ display: "flex", gap: "300px" }}>
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
          <h3 style={{ backgroundColor: "black", color: "white" }}>Category</h3>
        </div>
        <div>
          {data.map((ele) => {
            return (
              <div>
                <div
                  key={ele.id}
                  style={{ display: "flex", gap: "300px" }}
                  className="flex"
                >
                  <h3>{ele.name}</h3>
                  <h3>{ele.price}</h3>
                  <h3>{ele.category}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
      <h3
        style={{
          marginTop: "100px",
          backgroundColor: "red",
          height: "40px",
          marginBottom: "0",
        }}
      >
        copyright 2022 - Red Chilli | Delhi
      </h3>
    </div>
  );
};

export default Restaurant;
