import React from "react";

function LeftSection({
    imgURL,
    ProductName,
    ProductDescription,
}) {
  return (
    <>
       <div className="container">
        <div className="row">
          <div className="col-7 mt-5 mr-2 p-5 mb-3" >
            <img src={imgURL} style={{width:"80%",border:"1px",borderRadius:"10px"}}/>
          </div>
          <div className="col-5 mt-5 p-5" style={{lineHeight:"1.8"}}>
            <h2>{ProductName}</h2>
            <p>{ProductDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
