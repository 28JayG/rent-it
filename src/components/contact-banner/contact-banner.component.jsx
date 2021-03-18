import React from "react";
import LocationIcon from "../../assets/images/placeholder-white.png";

import "./contact-banner.styles.scss";
import "../../styles/text.styles.scss";
import { COMPANY_CALL_NUMBER } from "../../constants/company.constants";

const ContactBanner = () => (
  <div className="banner-wrapper">
    <div className="banner-container">
      <a href={`tel:${COMPANY_CALL_NUMBER}`} className="ri-text-style-3">
        Need Assistance? : Call Us: <strong>{COMPANY_CALL_NUMBER}</strong>
      </a>
      <div className="location-selector">
        <img src={LocationIcon} alt="" width="15" height="17" />
        <p className="ri-text-style-3">Banglore</p>
      </div>
    </div>
  </div>
);

export default ContactBanner;
