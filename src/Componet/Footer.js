import React from "react";
import "./Footer.css";
import { Container, Grid, Icon, Segment } from "semantic-ui-react";

function Footer() {
  return (
    <div className="footer">
      <h5>Questions? Call 832-682-5811</h5>
      <p>
        &copy; 2021 Design by <strong>Esther Kim</strong> (Full-stack Developer)
        <a href="mailto:estherkimyunjung@gmail.com">Email me</a> All Rights
        Reserved.
      </p>
      <p className="footer__lastContent">Thank You</p>
    </div>
  );
}

export default Footer;
