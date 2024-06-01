import React from "react";
import InfoBlock from "./InfoBlock";

import frame1 from "../images/Frame1.png"
import frame2 from "../images/Frame2.png"
import frame3 from "../images/Frame3.png"

const MainInfo = () => {
  return (
    <section className="row main-info container-all">
      <div className="col main-info-container">
        <div className="main-info-title">
          <p>Qubit CommerceAI.</p>
        </div>
        <div className="row main-info-block">
          <InfoBlock
            nameImage={frame1}
            infoTitle="More insight"
            infoText="Learn which products drive performance and which don't, through automated insights you can action."
          />
          <InfoBlock
            nameImage={frame2}
            infoTitle="More personal"
            infoText="Qubit CommerceAI generates a model per shopper to make every customer interaction more relevant."
          />
          <InfoBlock
            nameImage={frame3}
            infoTitle="More effective"
            infoText="Qubit fuses data, intent, and design tools to enable your team to create more effective customer experiences."
          />
        </div>
      </div>
    </section>
  );
};

export default MainInfo;