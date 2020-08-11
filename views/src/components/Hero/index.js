import React from "react";

const Hero = (props) => {
  return (
    <jumbotron className="">
      <div className="row text-center py-5">
        <div className="col">
          {props.title && (
            <h1 className="display-1 font-weight-bolder">{props.title}</h1>
          )}
          {props.subTitle && (
            <h3 className="display-4 font-weight-light">{props.subTitle}</h3>
          )}
          {props.text && (
            <h3 className="display-4 font-weight-light">{props.text}</h3>
          )}
        </div>
      </div>
    </jumbotron>
  );
};

export default Hero;
