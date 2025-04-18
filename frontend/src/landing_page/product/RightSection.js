import React from "react";
function RightSection({ imgURL, ProductName, ProductDescription, LearnMore }) {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-5 p-5" style={{marginTop:"210px"}}>
            <h1>{ProductName}</h1>
            <p>{ProductDescription}</p>
            <a href={LearnMore}>
              Learn More&nbsp;<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-7 mt-5 p-5">
            <img src={imgURL} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
