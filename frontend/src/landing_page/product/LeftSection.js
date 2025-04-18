import React from "react";

function LeftSection({
  imgURL,
  ProductName,
  ProductDescription,
  TryDemo,
  LearnMore,
  appStore,
  PlayStore,
}) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7 mt-5 mr-2 p-5 mb-3" >
            <img src={imgURL} />
          </div>
          <div className="col-5 mt-5 p-5" style={{lineHeight:"1.8"}}>
            <h2>{ProductName}</h2>
            <p>{ProductDescription}</p>
            <div className="mt-3 ">
              <a href={TryDemo} style={{ textDecoration: "none" }}>
                Try demo&nbsp;<i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href={LearnMore} style={{ textDecoration: "none",marginLeft:"105px" }}>
                Learn more &nbsp;<i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="mt-3 " >
              <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" />
              </a>
              <a href={PlayStore} style={{marginLeft:"50px"}}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
