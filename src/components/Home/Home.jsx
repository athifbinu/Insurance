import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-section">
      <h1>Add Travel Certificate</h1>

      <div className="generel">
        <h2>General information</h2>
        <hr />

        <div className="form-data">
          <div className="left">
            <div>
              <label>Assistance Plan</label>
              <input type="text" placeholder="Gold" />
            </div>

            <div>
              <label>Country of Residence</label>
              <input type="text" placeholder="United Arab Emirates" />
            </div>
          </div>

          <div className="right">
            <div>
              <label>Email</label>
              <input type="text" placeholder="Gold" />
            </div>

            <div>
              <label>Phone Number</label>
              <input type="text" placeholder="United Arab Emirates" />
            </div>

            <button>+Add Phone</button>

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



      {/* <div className="quatation">
        <div className="one">
           <h2>Quotation</h2>
        </div>
        <div className="two">

        </div>
      </div> */}


      <div className="travel-section">
          <h2>Travel</h2>
          <hr />

          <div className="travel-right">
      <div>
        <label htmlFor="destination">Destination(s)</label>
        <input type="text" id="destination" />
      </div>

      <div className="flex">
        <div>
          <label htmlFor="from">From</label>
          <input type="text" id="from" />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input type="text" id="to" />
        </div>
      </div>

      <div>
        <label htmlFor="duration">Duration</label>
        <input type="text" id="duration" />
      </div>

      <button>+Aff Travel</button>
    </div>

    <div className="travel-left">
       <input type="text" />
       <input type="text" />
       <input type="text" />
       <input type="text" />
    </div>

      </div>

    </div>
  );
};

export default Home;
