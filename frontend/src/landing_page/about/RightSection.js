import React from "react";
export default function RightSection({ imgURL, ProductName, ProductDescription}) {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-5 p-5" style={{marginTop:"210px"}}>
            <h1>{ProductName}</h1>
            <p>{ProductDescription}</p>
            
          </div>
          <div className="col-7 mt-5 p-5">
          <img src={imgURL} style={{width:"80%",border:"1px",borderRadius:"10px"}}/>
          </div>
        </div>
      </div>
    </>
  );
}