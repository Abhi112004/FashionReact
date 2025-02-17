import React from "react";
import { FaThList } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";

const Proudeselect = (prop) => {
  return (
    <>
      <div className="title-p">
        <h2>{prop.title}</h2>
      </div>
      <div className="select-outer">
        <div className="select-inner">
          <div className="select-item">
            <div className="select-icon">
              <span>
                <FaThLarge />
              </span>
              <span>
                <FaThList />
              </span>
            </div>
            <p>There are 18 products.</p>
          </div>
          <div className="select-item">
            <label htmlFor="">Sort by:</label>
            <select name="" id="">
              <option value="" selected>
                Relevance
              </option>
              <option value="">name a to z</option>
              <option value="">name z to a</option>
              <option value="">price</option>
            </select>
            <div className="fbtn">
              <a href="/" className="fil-btn">
                filter
              </a>
            </div>
          </div>
        </div>
        <p className="hide-p">Showing 1-12 of 18 item(s) </p>
      </div>
    </>
  );
};
export default Proudeselect;
