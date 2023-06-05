import React from "react";
import HeadAdmin from "./componentAdmin/HeadAdmin";



function Admin(props) {
  const {children}=props

  return (
    <div>
      <HeadAdmin />
      <div className="">
       {children}
      </div>
    </div>
  );
}

export default Admin;
