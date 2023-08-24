import React, { useState } from "react";
import "./Home.css";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Brazil from "../../assets/brazil.png";
import { AiTwotoneDelete, AiFillDelete } from "react-icons/ai";

import Gold from "../GoldDrop/Gold";
import CountryDrop from "../CountryDrop/CountryDrop";
import FlagData from "../../assets/Data/Country";

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

  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const handleAddPhoneNumber = () => {
    if (newPhoneNumber.trim() !== "") {
      setPhoneNumbers([...phoneNumbers, newPhoneNumber]);
      setNewPhoneNumber("");
    }
  };

  const handleDeletePhoneNumber = (index) => {
    const updatedPhoneNumbers = phoneNumbers.filter((_, i) => i !== index);
    setPhoneNumbers(updatedPhoneNumbers);
  };


  const [travelData, setTravelData] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [duration, setDuration] = useState("");

  const handleAddTravel = () => {
    if (fromDate && toDate && duration) {
      const newTravel = {
        fromDate,
        toDate,
        duration,
      };
      setTravelData([...travelData, newTravel]);
      setFromDate("");
      setToDate("");
      setDuration("");
    }
  };

  const handleDeleteTravel = (index) => {
    const updatedTravelData = travelData.filter((_, i) => i !== index);
    setTravelData(updatedTravelData);
  };

  return (
    <div className="home-section">
      <h2 style={{ marginLeft: "19px", marginTop: "18px" }}>
        Add Travel Certificate
      </h2>

      <div className="generel-section">
        <div className="generel">
          <div className="form-data">
            <h2>General information</h2>
            <hr />
            <div className="form-section">
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
                  <input
                    type="number"
                    value={newPhoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                  />

                  <span onClick={toggleDropDown} className="flex">
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

                  <button onClick={handleAddPhoneNumber}>+Add Phone</button>
                </div>

                <div className="adress">
                  <div className="phone-list">
                    <button className="head-one">Phone Numbers</button>
                    <button className="head-two"></button>
                  </div>
                  <div className="phoneNumber-list">
                    {phoneNumbers.map((number, index) => (
                      <div className="number-box" key={index}>
                        {number}
                        <div
                          className="number-box2"
                          onClick={() => handleDeletePhoneNumber(index)}
                        >
                          <AiFillDelete size={20} />
                        </div>
                      </div>
                    ))}
                  </div>

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
          <div className="travel-area">
            <div className="travel-right">
              <div>
                <label htmlFor="destination">Destination(s)</label>
                <MultiDrop onSelect={handleSelect}/>
              </div>

              <div className="dateSection">
                <div>
                  <label htmlFor="from">From</label>
                  <input
                    type="date"
                    placeholder="enter date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="to">To</label>
                  <input
                    type="date"
                    placeholder="enter date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="duration">
                <label htmlFor="duration">Duration</label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>

              <button className="add-btn" onClick={handleAddTravel}>
                +Aff Travel
              </button>
            </div>

            <div className="travel-left">
              <div className="travel-btn">
                <button className="destination-btn">Destination(s)</button>
                <button className="from-btn">From</button>
                <button className="to-btn">To</button>
                <button className="duration-btn">Duration</button>
                <button className="actions-btn">Actions</button>
              </div>

              <div className="travel-listSection">
                {travelData.map((item, index) => (
                  <div className="travel-list" key={index}>
                       <div className="travelBox1">
                        America
                       </div>
                       <div className="travelBox2">
                        {item.fromDate}
                       </div>
                       <div className="travelBox3">
                        {item.toDate}
                       </div>
                       <div className="travelBox4">
                        {item.duration}
                       </div>
                    <div
                      className="travelBox5"
                      onClick={() => handleDeleteTravel(index)}
                    >
                      <AiFillDelete
                        size={20}
                        style={{ color: "red", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                ))}
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
              <div className="check-sections">
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

              <div className="check-sections">
                <div className="checkMale">
                  <label className="dot-checkbox">
                    <input onClick={openMale} type="checkbox" />
                    <span className="dot"></span>
                  </label>
                  <p>Male</p>
                </div>
                <div className="checkFemale">
                  <label className="dot-checkbox">
                    <input onClick={openFemale} type="checkbox" />
                    <span className="dot"></span>
                  </label>
                  <p>Female</p>
                </div>
              </div>
            </div>
            <div className="name-section">
              <div>
                <label>First Name</label>
                <input type="text" />
              </div>

              <div>
                <label>Middle Name</label>
                <input type="text" />
              </div>

              <div>
                {showMale ? (
                  <label>Maiden Name</label>
                ) : (
                  <label>Last Name</label>
                )}
                <input type="text" />
              </div>

              {showMale && (
                <div>
                  <label>Last Name</label>
                  <input type="text" />
                </div>
              )}
            </div>

            <div className="name-section">
              <div>
                <label>Passport No.</label>
                <input type="number" />
              </div>

              <div>
                <label>Date Of Birth</label>
                <input type="date" />
              </div>

              {showFamily && (
                <div>
                  <button>+ Add Beneficiary</button>
                </div>
              )}
            </div>

            {showFamily && (
              <div className="beniForm-section">
                <div className="beni-list">
                  <button>First Name</button>
                  <button>Last Name</button>
                  <button>Date of Birth</button>
                  <button>Passport No.</button>
                </div>
                <div className="actions">
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

      <div className="mobile-quotation">
        <div className="box-1">
          <p>Quotation</p>
        </div>
        <div className="box-2"></div>
      </div>
    </div>
  );
};

export default Home;
