import React, { useState } from "react";
import "./Home.css";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Brazil from "../../assets/brazil.png";
import { AiTwotoneDelete } from "react-icons/ai";

import Gold from "../GoldDrop/Gold";
import CountryDrop from "../CountryDrop/CountryDrop";
import FlagData from "../../assets/Data/Country";
import DateDrop from "../DatePiker/DateDrop";

// import MultiDrop from "../multiDrop/MultiDrop";
import MultiDrop from "../../components/multiDrop/MultiDrop";

const Home = () => {
  const [showAdvancedText, setShowAdvancedText] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [select, setSelected] = useState(""); // Initialize with an empty string
  const [isOpen, setIsOpen] = useState(false);

  const [showFamily, setshowFamily] = useState(false);
  const [showMale, setShowFemale] = useState(false);

  const handleIconClick = () => {
    setShowAdvancedText(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelect = (selectedFlag) => {
    setSelected(selectedFlag);
    setIsOpen(false);
  };

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const openfamily = () => {
    setshowFamily(true);
  };

  const openSingle = () => {
    setshowFamily(false);
  };

  const openFemale = () => {
    setShowFemale(true);
  };

  const openMale = () => {
    setShowFemale(false);
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
                  <CountryDrop />
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

                <div className="pone-num">
                  <label>Phone Number</label>
                  <input type="text" />

                  <span
                    onClick={toggleDropDown}
                    className="flex"
                    style={{
                      alignItems: "center",
                      marginTop: "-28px",
                      marginLeft: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{ width: "26px" }}
                      src={select || Brazil} // Use the selected flag or a default flag
                      alt="Selected Flag"
                    />
                    <MdArrowDropDown className={isOpen ? "rotate-180" : ""} />
                  </span>

                  {isOpen && (
                    <ul className="flag-list">
                      {FlagData.map((data) => (
                        <li
                          key={data.id}
                          onClick={() => handleSelect(data.Flag)}
                        >
                          <img
                            style={{ width: "26px" }}
                            src={data.Flag}
                            alt=""
                          />
                          {data.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button>+Add Phone</button>
                <br />
                <div className="adress">
                  <input type="number" placeholder="Phone Number" />

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
                <MultiDrop />
              </div>

              <div className="flex" style={{ gap: "10px" }}>
                <div>
                  <label htmlFor="from">From</label>
                  <DateDrop />
                </div>
                <div>
                  <label htmlFor="to">To</label>
                  <DateDrop />
                </div>
              </div>

              <div>
                <label htmlFor="duration">Duration</label>
                <input type="text" style={{ width: "382px" }} />
              </div>

              <button className="add-btn">+Aff Travel</button>
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
                    <input onClick={openSingle} type="checkbox" />
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
                    <input onClick={openfamily} type="checkbox" />
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
                    <input onClick={openMale} type="checkbox" />
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
                    <input onClick={openFemale} type="checkbox" />
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
                {showMale && <label>Maiden Name</label>}
                <input type="text" />
              </div>

              {showMale && (
                <div>
                  <label>Last Name</label>
                  <input type="text" />
                </div>
              )}
            </div>

            <div className="name-section flex">
              <div>
                <label>Passport No.</label>
                <input type="text" />
              </div>

              <div>
                <label>Date Of Birth</label>
                <input type="text" />
              </div>

              {showFamily && (
                <div>
                  <button>+ Add Beneficiary</button>
                </div>
              )}
            </div>

            {showFamily && (
              <div
                className="beniForm-section flex"
                style={{ marginTop: "14px" }}
              >
                <div className="beni-list">
                  <button>First Name</button>
                  <button>Last Name</button>
                  <button>Date of Birth</button>
                  <button>Passport No.</button>
                </div>
                <div className="actions flex">
                  <button>Actions</button>
                  <AiTwotoneDelete size={15} className="action-icon" />
                </div>
              </div>
            )}

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
