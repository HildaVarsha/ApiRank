/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { Link } from "react-router-dom";

const Rank = () => {
  const [posts, setPosts] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [search, setSearch] = useState("");
  const searchFilter = (e) => {
    const Search = e.target.value;
    const results = posts.filter((post) =>
      post.name.common.toLowerCase().includes(Search.toLowerCase())
    );
    setFilterList(results);
    console.log(results, "result");
  };
  console.log(search, "search");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setFilterList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const callBack = (e) => {
    console.log(e.target.value, "eee");
  };
  return (
    <div className="data-container">
      <h2 className="main-head">World Rank</h2>
      <div className="search-div">
        <h3>Found 250 countries</h3>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onChange={(e) => {
            searchFilter(e);
          }}
        />
        <CiSearch className="search-icon" size={20} />
      </div>
      <div className="header">
        <h4 className="">National Flag</h4>
        <h4 className="">Name</h4>
        <h4 className="">Population</h4>
        <h4 className="">Area(km)</h4>
        <h4 className="">Gini</h4>
        <h4 className="">View</h4>
      </div>
      <div className="rank-card-hover">
        {filterList?.map((items) => {
          const val = items?.name.common;
          return (
            <div className="card-model bounce">
              <img
                src={items.flags.png}
                className="d-flex shadow-class image"
                alt="no-flag"
              />
              <p className="d-flex shadow-class">{items?.name.common}</p>
              <p className="d-flex shadow-class">{items?.population}</p>
              <p className="d-flex shadow-class">{items?.area}</p>
              <p className="d-flex shadow-class">{items?.startOfWeek}</p>
              <Link
                to={"/card"}
                state={{
                  val,
                }}
                className="button-style image shadow-class"
              >
                <BsEmojiHeartEyes size={25} className="shadow-class" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rank;
