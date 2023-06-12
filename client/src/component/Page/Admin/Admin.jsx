import React from "react";
import HeadAdmin from "./componentAdmin/HeadAdmin";
import FrofileAdmin from "./componentAdmin/frofileAdmin";

function Admin(props) {
  const { children } = props;

  return (
    <>
      <HeadAdmin />
      <div className="flex">
        <FrofileAdmin/>
        <div className="mt-10 ml-10 w-[80%]">{children}</div>
      </div>
    </>
  );
}

export default Admin;
