import React from "react";
import { Affix } from "antd";

// import Form from "./Form";AntForm
import AntForm from "./AntForm";

const SideBar = () => (
  <div>
    <Affix offsetTop={80}>
      <AntForm />
    </Affix>
  </div>
);

export default SideBar;
