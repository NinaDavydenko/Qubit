import React from "react";

const InfoBlock = ({nameImage, infoTitle, infoText}) => {
  return (
    <div className="col info-block">
      <div>
        <img className="img-main-info-container" src={nameImage} alt="frame" />
      </div>
      <div>
        <p className="info-title">{infoTitle}</p>
      </div>
      <div>
        <p className="info-text">{infoText}</p>
      </div>
    </div>
  );
};

export default InfoBlock;