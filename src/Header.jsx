import React from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (  
    <>
    <div className="small-header">
        <div className="container">
          <div className="small-inner">
            <div className="small-item">
              <span  id="menu-icon" className="menu-icon">
                <FaBars />
              </span>
              <img src="assets/image/etrend-logo.png" alt="" />
            </div>
            <div className="small-end small-item ">
              <span className="small-icon">
                <FaSignInAlt />
              </span>
              <span className="small-icon">
                <FaUserPlus />
              </span>
              <span className="small-icon">
                <FaShoppingBag />
              </span>
            </div>
          </div>
        </div>
        <div className="buttom-iconn-outer">
          <div className="container">
            <div className="buttom-iconn">
              <span className="FaSearch">
                <FaSearch />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        {/* <!-- start header-top section--> */}
        <div className="header-top">
           
          <div className="container">
            <div className="top-inner">
              <div className="item">
                <span className="span1">
                  <a href="/">English</a>
                </span>
                <span className="span2">
                  <a href="/">USD $ </a>
                </span>
              </div>
              <div className="item">
                <span className="span3">
                  <a href="/">Sign in</a>
                </span>
                <span className="span4">
                  <a href="/">Create An Account</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end eader-top section--> */}
        {/* <!-- start eader-middle section--> */}
        <div className="header-middel">
          <div className="container">
            <div className="middel-inner">
              <div className="item-l">
                <img src="assets/image/etrend-logo.png" alt="" />
              </div>
              <div className="item-r">
                <div className="item-l-inner">
                  <div className="item-i-l">
                    <form action="">
                      <input type="text " placeholder="Search our catalog" />
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </form>
                  </div>
                  <div className="item-i-r">
                    <div className="text">
                      <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                        <p>
                          Call Us Now
                          <span>(123)4567-890</span>
                        </p>
                      </div>
                      <div className="icon">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <p>
                          <span>my cart </span> 0 Item(s)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end eader-mi section--> */}
        {/* <!-- start eader-Buttom section--> */}
        <div className="header-buttom-outer">
          <div className="container">
            <ul className="buttom-inner">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
              <Link to="/Shop" className="btn-icon">
                  shop{" "}
                </Link>
                <ul className="sub-item">
                  <li>
                  <Link to="/Shop/Fashion"  className="btn-icon1">
                      fashion
                    </Link>
                    <ul className="sub-item-inner">
                      <li>
                        <a href="/">men</a>
                      </li>
                      <li>
                        <a href="/">women</a>
                      </li>
                      <li>
                        <a href="/">kids</a>
                      </li>
                      <li>
                        <a href="/">accrssories</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/" className="btn-icon1">
                      jewellery
                    </a>
                    <ul className="sub-item-inner">
                      <li>
                        <a href="/">Rings</a>
                      </li>
                      <li>
                        <a href="/">Bracelets</a>
                      </li>
                      <li>
                        <a href="/">Necklaces</a>
                      </li>
                      <li>
                        <a href="/">Wedding Bands</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/" className="btn-icon1">
                      furniture
                    </a>
                    <ul className="sub-item-inner">
                      <li>
                        <a href="/">Living Room</a>
                      </li>
                      <li>
                        <a href="/">Kitchen</a>
                      </li>
                      <li>
                        <a href="/">Office</a>
                      </li>
                      <li>
                        <a href="/">Home Decor</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/" className="btn-icon1">
                      autoparts
                    </a>
                    <ul className="sub-item-inner">
                      <li>
                        <a href="/">Home Decor </a>
                      </li>
                      <li>
                        <a href="/">Exhaust Parts</a>
                      </li>
                      <li>
                        <a href="/">Brake Parts</a>
                      </li>
                      <li>
                        <a href="/">Body Parts</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
              <Link to="/Electronics" className="btn-icon">
                  Electronics{" "}
                </Link>
                <ul className="sub-item">
                  <li>
                    <a href="/" className="btn-icon1">
                      mobiles
                    </a>
                    <ul className="sub-item-inner">
                      <li>
                        <a href="/">apple </a>
                      </li>
                      <li>
                        <a href="/">black berry</a>
                      </li>
                      <li>
                        <a href="/">oneplus</a>
                      </li>
                      <li>
                        <a href="/">sony</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/" className="btn-icon1">
                      cameras
                    </a>
                    <ul className="sub-item-inner">
                      <li>
                        <a href="/">DSLR </a>
                      </li>
                      <li>
                        <a href="/">lences</a>
                      </li>
                      <li>
                        <a href="/">tripods</a>
                      </li>
                      <li>
                        <a href="/">batteries</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
              <Link to="/Sports&books" className="btn-icon">
                  sports & books{" "}
                </Link>
                <ul className="sub-item">
                  <li>
                    <a href="/">sports</a>
                  </li>
                  <li>
                    <a href="/">books</a>
                  </li>
                </ul>
              </li>
              <li>
              <Link to="/Sale">sale</Link>
              </li>
              <li>
              <Link to="/contact">contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- end header buttom section--> */}
      </div>
      
    </>
  );
};
export default Header;
