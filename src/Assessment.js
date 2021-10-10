import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./images/Picture1.png";

import Timer from "./Timer";
import ChattingBlock from "./ChattingBlock";
import Camera from "./camera";

const Assessment = () => {
  
  return (
    <>
      <div className="header bg-primary ">
        <p className="text-white p-2 ms-4 mb-0 font-monospace fs-4"><Timer/></p>
      </div>
      {/* outer container */}
      <div className=" d-flex" style={{ height:"94vh" }}>
            {/* inner container 1 */}
            <div className="container w-50 border border-primary d-flex p-0">
            {/* sub-inner container 1 */}
            <div className="container border w-50 border-secondary p-0 d-flex flex-column justify-content-between ">
                <div>
                <img className="w-100" src={img1} alt="niksar" />
                </div>
                <div >
                <Camera/>
                </div>
                <div className="h-50"></div>
                <div className="p-2 text-center ">
                <p className="text-primary fs-5 ">Facing issues?</p>
                <span><img src="https://img.icons8.com/ios-filled/20/000000/apple-phone.png" alt='icon'/>+91 861 860 4898</span> <br/>
                <span><img src="https://img.icons8.com/ios-filled/20/000000/apple-phone.png" alt='icon'/>+91 867 480 6608</span>
                </div>
            </div>

            {/* sub-inner container-2 */}
            <div className="container border  border-success p-0 w-100">
              <img className="h-100 w-100" src="https://media.giphy.com/media/NBKgvwgqmXUmBEKUJE/giphy.gif" alt=""/>  
              <a href className="btn p-2  btn-primary "style={{zIndex:"1",position:"absolute",bottom:"1vh" ,left:"30vw",borderRadius:"2em",width:"6vw",lineHeight:"15px"}}>Pardon<span><br/>Me</span></a>
            </div>
            </div>

            {/* inner container 2 */}
            <div className="container w-50 border border-primary p-0">
            <ChattingBlock/>
            </div>
      </div>
    </>
  );
};

export default Assessment;
