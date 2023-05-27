/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Card = () => {
  const [singleValue, setSingleValue] = useState([]);
  const location = useLocation();
  console.log(location, "location");
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${location.state.val}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
        setSingleValue(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <h2 className="main-head">World Rank</h2>
      {singleValue?.map((item) => {
        const val = Object.keys(item?.languages ? item?.languages : "-");
        const currency = Object.keys(item?.currencies ? item?.currencies : "-");
        const gini = Object.keys(item?.gini ? item?.gini : "-");
        const native = Object.keys(
          item?.name.nativeName ? item?.name.nativeName : "-"
        );
        return (
          <div className="double-card">
            <div className="card-modal-one">
              <img src={item.flags.png} className="single-flag" alt="jhfkgk" />
              <div className="inside-values">
                <h1 className="single-head">{item?.name.common}</h1>
                <h4 className="single-head">{item?.continents[0]}</h4>
                <div className="card-value">
                  <div>
                    <p class="price">{item?.population}</p>
                    <label>Population</label>
                  </div>
                  <div>
                    <p>{item?.area}</p>
                    <label>Area</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-modal-one">
              <h3>Details</h3>
              <div className="card-data">
                <div>
                  <p>Capital</p>
                  <p>Languages</p>
                  <p>Currencies</p>
                  <p>Native name</p>
                  <p>Gini</p>
                  <p>Neighbouring Countries</p>
                </div>
                <div>
                  <p>
                    {Object.values(item?.languages ? item?.languages : "-")}
                  </p>
                  <p>
                    {/* {Object.values(item?.languages ? item?.languages : "-")} */}
                  </p>
                  <p>
                    {Object.values(item?.languages ? item?.languages : "-")}
                  </p>
                  <p>
                    {Object.values(item?.languages ? item?.languages : "-")}
                  </p>
                  <p>
                    {Object.values(item?.languages ? item?.languages : "-")}
                  </p>
                  <p>
                    {Object.values(item?.languages ? item?.languages : "-")}
                  </p>
                </div>
                {/* <div>
                  <p>{item?.capital ? item?.capital[0] : "-"}</p>
                  {val?.map((key, index) => {
                    return (
                      <div key={index}>
                        <p>{item.languages[key]}</p>
                      </div>
                    );
                  })}
                  {currency?.map((key, index) => {
                    return (
                      <div key={index}>
                        <p>
                          {item.currencies ? item.currencies[key].name : "-"}
                        </p>
                      </div>
                    );
                  })}

                  {native?.map((key, index) => {
                    return (
                      <div key={index}>
                        <p>{item?.name.nativeName[key]}</p>
                      </div>
                    );
                  })}
                  {gini?.map((key, index) => {
                    return (
                      <div key={index}>
                        <p>{item.gini ? item.gini[key] : "-"}</p>
                      </div>
                    );
                  })}
                  <p>{item?.region}</p>
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
