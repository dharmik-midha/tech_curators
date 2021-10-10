import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ChattingBlock = () => {
  return (
    <>
      {/* chat container */}
      <div className="chatBox d-flex flex-column  h-100 w-100 overflow-auto">


        {/* chat body */}
        <div className="chatreciever d-flex w-100 justify-content-start">
          <blockquote>
            Predict the output for the given code snippet.
          </blockquote>
        </div>
        <div className="chatreciever d-flex w-100 justify-content-start">
          <blockquote>
            <pre className="bg-white p-1 m-1">
              <code className="language-python">
                {"d={}"}
                <br />
                for x in enumerate(range(2)): <br /> d[x[0]]=x[1] <br />{" "}
                d[x[1]+7]=x[0]
                <br />
                print(d)
              </code>
            </pre>
          </blockquote>
        </div>
        <div className="chatsender d-flex w-100 justify-content-end">
          <blockquote>
            
            Predict the output for the given code snippet.
          </blockquote>
        </div>



        
        {/* chat footer */}
        <div
          className="chatfooter pb-3 text-center"
          style={{
            zIndex: "1",
            position: "absolute",
            bottom: 10,
            right: "4vw",
          }}
        >
            <div className="buttons d-flex justify-content-start flex-wrap ">
              <p className="btn btn-light  border-primary border text-primary ">KeyError</p>
              <p className="btn btn-light  border-primary border text-primary ">(0:1,7:0,1:1,8:0)</p>
              <p className="btn btn-light  border-primary border text-primary ">(0:1,7:0,1:1,8:0)</p>
              <p className="btn btn-light  border-primary border text-primary ">(0:1,7:0,1:1,8:0)</p>
              <p className="btn btn-light  border-primary border text-primary ">(0:1,7:0,1:1,8:0)</p>
              <p className="btn btn-light  border-primary border text-primary ">(0:1,7:0,1:1,8:0)</p>
              <p className="btn btn-light  border-primary border text-primary ">(0:1,7:0,1:1,8:0)</p>
              <p className="btn btn-light  border-primary border text-primary ">Skip this question</p>
            
            </div>

          <input
            className="p-2 border no-border d-inline "
            type="search"
            name="inputText"
            id="inputText"
            placeholder="Select an option from above"
            style={{
              boxSizing: "border-box",
              backgroundColor: "rgb(245, 245, 245)",
              width: "40vw",
            }}
          />
          <button className="button btn-primary border no-border p-2">
            <img
              src="https://img.icons8.com/ios-glyphs/20/000000/telegram-app.png"
              alt=""
              style={{ filter: "invert(1)" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChattingBlock;

