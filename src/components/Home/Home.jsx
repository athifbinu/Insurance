import React, { useState } from "react";
import "./Home.css";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Brazil from "../../assets/brazil.png";

import Gold from "../GoldDrop/Gold";
import Flag from "../FlagDrop/Flag";

const Home = () => {
  const [showAdvancedText, setShowAdvancedText] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleIconClick = () => {
    setShowAdvancedText(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="home-section">
      <h2 style={{ marginLeft: "19px", marginTop: "18px" }}>
        Add Travel Certificate
      </h2>

      <div className="flex">
        <div className="generel">
          <div className="form-data">
            <h2>General information</h2>
            <hr />
            <div className="flex">
              <div className="left">
                <div>
                  <label>Assistance Plan</label>
                  <Gold />
                </div>

                <div>
                  <label>Country of Residence</label>
                  <input type="text" placeholder="United Arab Emirates" />

                  <span>
                    <IoIosClose size={30} className="close" />
                    <MdArrowDropDown
                      size={20}
                      style={{
                        position: "absolute",
                        marginLeft: "-20px",
                        marginTop: "4px",
                      }}
                    />
                  </span>
                
                </div>
              </div>

              <div className="right">
                <div className="email flex">
                  <div
                    style={{
                      height: "30px",
                      width: "23px",
                      marginTop: "27px",
                      backgroundColor: "#ccc",
                    }}
                    onClick={handleIconClick}
                  >
                    <BsArrowRight style={{ padding: "5px" }} />
                  </div>

                  <div>
                    <label>Email</label>
                    <input
                      type="text"
                      value={
                        showAdvancedText
                          ? "experiehnes@travellerschoice.ae"
                          : inputValue
                      }
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label>Phone Number</label>
                  <input type="text" />

                  <span
                    className="flex"
                    style={{
                      alignItems: "center",
                      marginTop: "-28px",
                      marginLeft: "5px",
                    }}
                  >
                    <img style={{ width: "26px" }} src={Brazil} alt="" />
                    <MdArrowDropDown />
                  </span>
                </div>

                <button>+Add Phone</button>
                <br />
                <br />
                <input type="number" placeholder="Phone Number" />

                <div>
                  <label>Adress</label>
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="note">
              <label>Notes</label>
              <textarea class="contact-form-textarea"></textarea>
            </div>
          </div>
        </div>

        <div className="quotation-section">
          <div className="box-1">
            <p>Quotation</p>
          </div>
          <div className="box-2"></div>
        </div>
      </div>

      <div className="travel-section">
        <div className="travel-form">
          <h2>Travel</h2>
          <br />
          <hr />
          <div className="flex" style={{ marginTop: "18px" }}>
            <div className="travel-right">
              <div>
                <label htmlFor="destination">Destination(s)</label>
                <input
                  type="text"
                  id="destination"
                  style={{ width: "382px" }}
                />
              </div>

              <div className="flex" style={{ gap: "10px" }}>
                <div>
                  <label htmlFor="from">From</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="to">To</label>
                  <input type="text" />
                </div>
              </div>

              <div>
                <label htmlFor="duration">Duration</label>
                <input type="text" style={{ width: "382px" }} />
              </div>

              <button>+Aff Travel</button>
            </div>

            <div className="travel-left">
              <div className="travel-btn">
                <button className="destination-btn">Destination(s)</button>
                <button className="from-btn">From</button>
                <button className="to-btn">To</button>
                <button className="duration-btn">Duration</button>
                <button className="actions-btn">Actions</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="beneficiry-section">
        <div className="beni-form">
          <h2>Benificiary</h2>
          <br />
          <hr />
          <div style={{ marginTop: "14px", lineHeight: "30px" }}>
            <div style={{ lineHeight: "38px" }}>
              <div className="check-sections flex">
                <div
                  className="flex"
                  style={{ alignItems: "center", gap: "2px" }}
                >
                  <label className="dot-checkbox">
                    <input type="checkbox" />
                    <span className="dot"></span>
                  </label>
                  <p>Single</p>
                  <AiFillQuestionCircle />
                </div>
                <div
                  className="flex"
                  style={{ alignItems: "center", gap: "2px" }}
                >
                  <label className="dot-checkbox">
                    <input type="checkbox" />
                    <span className="dot"></span>
                  </label>
                  <p>Family</p>
                  <AiFillQuestionCircle />
                </div>
              </div>

              <div className="search">
                <input placeholder="Search" type="text" />
              </div>

              <div className="check-sections flex">
                <div
                  className="flex"
                  style={{ alignItems: "center", gap: "2px" }}
                >
                  <label className="dot-checkbox">
                    <input type="checkbox" />
                    <span className="dot"></span>
                  </label>
                  <p>Male</p>
                </div>
                <div
                  className="flex"
                  style={{
                    alignItems: "center",
                    gap: "2px",
                    marginLeft: "24px",
                  }}
                >
                  <label className="dot-checkbox">
                    <input type="checkbox" />
                    <span className="dot"></span>
                  </label>
                  <p>Female</p>
                </div>
              </div>
            </div>
            <div className="name-section flex">
              <div>
                <label>First Name</label>
                <input type="text" />
              </div>

              <div>
                <label>Middle Name</label>
                <input type="text" />
              </div>

              <div>
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>

            <div className="name-section flex">
              <div>
                <label>First Name</label>
                <input type="text" />
              </div>

              <div>
                <label>Middle Name</label>
                <input type="text" />
              </div>
            </div>

            <div className="back-btn">
              <button>Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
