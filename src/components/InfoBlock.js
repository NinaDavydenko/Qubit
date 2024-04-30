import React from "react";

const InfoBlock = ({nameImage, infoTitle, infoText}) => {
  return (
    <div class="col info-block">
      <div>
        <img class="img-main-info-container" src={nameImage} alt="frame" />
      </div>
      <div>
        <p class="info-title">{infoTitle}</p>
      </div>
      <div>
        <p class="info-text">{infoText}</p>
      </div>
    </div>
  );
};

export default InfoBlock;